import { Injectable } from '@angular/core';
import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../model/usuario';
import { SqliteService } from './sqlite.service';
import { showToast } from '../tools/message-routines';

@Injectable()
export class DataBaseService {


  userUpgrades = [
    {
      toVersion: 1,
      statements: [`
        CREATE TABLE IF NOT EXISTS USUARIO (
          correo TEXT PRIMARY KEY NOT NULL,
          password TEXT NOT NULL,
          nombre TEXT NOT NULL,
          apellido TEXT NOT NULL,
          preguntaSecreta TEXT NOT NULL,
          respuestaSecreta TEXT NOT NULL,
          isAdmin BOOLEAN NOT NULL
        );
      `]
    }
  ]

  nombreBD = 'asistencia1';
  db!: SQLiteDBConnection;
  listaUsuarios: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([]);
  datosQR: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private sqliteService: SqliteService) { }

  async inicializarBaseDeDatos() {
    await this.sqliteService.crearBaseDeDatos({ database: this.nombreBD, upgrade: this.userUpgrades });
    this.db = await this.sqliteService.abrirBaseDeDatos(this.nombreBD, false, 'no-encryption', 1, false);
  }

  async crearUsuariosDePrueba() {
    await this.guardarUsuario(Usuario.getUsuario('admin@admin.com', 'admin', 'admin', 'admin', 'Pregunta secreta', 'Respuesta secreta', true));
    await this.leerUsuario('atorres@duocuc.cl').then(async usuario => {
      if (!usuario) await this.guardarUsuario(Usuario.getUsuario('atorres@duocuc.cl', '1234', 'Ana', 'Torres', 'Nombre de mi mascota', 'gato', false));
      this.leerUsuario('avalenzuela@duocuc.cl').then(async usuario => {
        if (!usuario) await this.guardarUsuario(Usuario.getUsuario('mati.rodriguez@duocuc.cl', '1234', 'Matias', 'Rodriguez', 'Nombre de mi mascota', 'gato', false));
        this.leerUsuario('cfuentes@duocuc.cl').then(async usuario => {
          if (!usuario) await this.guardarUsuario(Usuario.getUsuario('ga.campomanes@duocuc.cl', '1234', 'Gabriela', 'Campomanes', 'Gata', 'churu', false));
        });
      });
    });
  }

  async guardarUsuario(usuario: Usuario) {
    const sql = 'INSERT OR REPLACE INTO USUARIO (correo, password, nombre, apellido, ' +
      'preguntaSecreta, respuestaSecreta, isAdmin) VALUES (?,?,?,?,?,?, ?);';

    const usuariosRegistrados = await this.db.query('SELECT COUNT(*) as count FROM USUARIO;');
    const count = usuariosRegistrados?.values?.[0]?.count || 0;


    // Asignar el rol de administrador al primer usuario registrado
    if (count === 0) {
      usuario.isAdmin = true;
    }

    await this.db.run(sql, [usuario.correo, usuario.password, usuario.nombre, usuario.apellido,
    usuario.preguntaSecreta, usuario.respuestaSecreta, usuario.isAdmin]);

    await this.leerUsuarios();
  }

  async leerUsuarios() {
    const usuarios: Usuario[] = (await this.db.query('SELECT * FROM USUARIO;')).values as Usuario[];
    this.listaUsuarios.next(usuarios);
    return usuarios;
  }

  async leerUsuario(correo: string): Promise<Usuario | undefined> {
    const usuarios: Usuario[] = (await this.db.query('SELECT * FROM USUARIO WHERE correo=?;', [correo])).values as Usuario[];
    return usuarios[0];
  }

  async eliminarUsuarioUsandoCorreo(correo: string) {
    await this.db.run('DELETE FROM USUARIO WHERE correo=?', [correo]);
    await this.leerUsuarios();
  }

  async validarUsuario(correo: string, password: string): Promise<Usuario | undefined> {
    const usuarios: Usuario[] = (await this.db.query('SELECT * FROM USUARIO WHERE correo=? AND password=?;',
      [correo, password])).values as Usuario[];
    return usuarios[0];
  }

  async actualizarSesionActiva(correo: string, sesionActiva: string) {
    const sql = 'UPDATE USUARIO SET sesionActiva=? WHERE correo=?';
    await this.db.run(sql, [sesionActiva, correo]);
    await this.leerUsuarios();
  }

  async validarCorreo(correo: string): Promise<Usuario | undefined> {
    const usuarios: Usuario[] = (await this.db.query('SELECT * FROM USUARIO WHERE correo=?;',
      [correo])).values as Usuario[];
    return usuarios[0];
  }

  async validarRespuesta(respuestaSecreta: string): Promise<Usuario | undefined> {
    const usuarios: Usuario[] = (await this.db.query('SELECT * FROM USUARIO WHERE respuestaSecreta=?;',
      [respuestaSecreta])).values as Usuario[];
    return usuarios[0];
  }

  async validarPregunta(preguntaSecreta: string): Promise<Usuario | undefined> {
    const usuarios: Usuario[] = (await this.db.query('SELECT * FROM USUARIO WHERE preguntaSecreta=?;',
      [preguntaSecreta])).values as Usuario[];
    return usuarios[0];
  }

  async validarExistenciaUsuario(correo: string): Promise<boolean> {
    const usuario = await this.leerUsuario(correo);
    return usuario !== undefined;
  }

  async registrarUsuario(nuevoUsuario: Usuario) {
    try {
      const existeUsuario = await this.validarExistenciaUsuario(nuevoUsuario.correo);
  
      if (existeUsuario) {
        showToast(`¡El correo ya está registrado!`);
      } else {
        // Validar los datos del usuario antes de registrar
        const errorValidacion = nuevoUsuario.validarPropiedadesUsuario(
          nuevoUsuario.correo,
          nuevoUsuario.password,
          nuevoUsuario.nombre,
          nuevoUsuario.apellido,
          nuevoUsuario.preguntaSecreta,
          nuevoUsuario.respuestaSecreta
        );
  
        if (errorValidacion) {
          showToast(errorValidacion);
        } else {
          // Asignar el rol de administrador al primer usuario registrado
          const usuariosRegistrados = await this.db.query('SELECT COUNT(*) as count FROM USUARIO;');
          const count = usuariosRegistrados?.values?.[0]?.count || 0;
  
          nuevoUsuario.isAdmin = count === 0;
  
          await this.guardarUsuario(nuevoUsuario);
          showToast(`¡Usuario registrado con éxito!`);
        }
      }
    } catch (error) {
      // Manejar errores generales aquí, si es necesario
      console.error('Error al registrar usuario:', error);
      showToast('Hubo un problema al registrar el usuario.');
    }
  }
  
}
