import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';
import { DataBaseService } from './data-base.service';
import { Storage } from '@ionic/storage-angular';
import { showToast } from '../tools/message-routines';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  keyUsuario = 'USUARIO_AUTENTICADO';
  usuarioAutenticado = new BehaviorSubject<Usuario | null>(null);
  primerInicioSesion = new BehaviorSubject<boolean>(false);
  isAdmin(): boolean {
    const usuarioAutenticado = this.usuarioAutenticado.value;
    return usuarioAutenticado !== null && usuarioAutenticado !== undefined && usuarioAutenticado.isAdmin;
  }

  constructor(private router: Router, private bd: DataBaseService, private storage: Storage) {
    this.inicializarAutenticacion();
  }

  async inicializarAutenticacion() {
    await this.storage.create();
  }

  isAuthenticated(): Promise<boolean> {
    return this.leerUsuarioAutenticado().then(usuario => {
      return usuario !== null;
    });
  }

  async leerUsuarioAutenticado(): Promise<Usuario | undefined> {
    const usuario = await this.storage.get(this.keyUsuario) as Usuario;
    this.usuarioAutenticado.next(usuario);
    return usuario;
  }

  guardarUsuarioAutenticado(usuario: Usuario) {
    this.storage.set(this.keyUsuario, usuario);
    this.usuarioAutenticado.next(usuario);
  }

  eliminarUsuarioAutenticado(usuario: Usuario) {
    this.storage.remove(this.keyUsuario);
  }

  async login(correo: string, password: string) {
    await this.storage.get(this.keyUsuario).then(async (usuarioAutenticado) => {
      if (usuarioAutenticado) {
        this.usuarioAutenticado.next(usuarioAutenticado);
        this.primerInicioSesion.next(false);
        this.router.navigate(['inicio']);

      } else {
        await this.bd.validarUsuario(correo, password).then((usuario: Usuario | undefined) => {
          if (usuario) {
            showToast(`¡Bienvenido ${usuario.nombre} ${usuario.apellido}!`);
            this.guardarUsuarioAutenticado(usuario);
            this.primerInicioSesion.next(true);
            this.router.navigate(['inicio']);
            if (usuario.isAdmin) {
              this.router.navigate(['admin']);
            }
            else {
              this.router.navigate(['inicio']);
            }

          } else {
            showToast(`El correo o la password son incorrectos`);
            this.router.navigate(['ingreso']);
          }
        })
      }
    })
  }

  async logout() {
    this.leerUsuarioAutenticado().then((usuario) => {
      if (usuario) {
        showToast(`¡Hasta pronto ${usuario.nombre} ${usuario.apellido}!`);
        this.eliminarUsuarioAutenticado(usuario);
      }
      this.router.navigate(['ingreso']);
    });
  }
  async registrarUsuario(nuevoUsuario: Usuario): Promise<void> {
    const existeUsuario = await this.bd.validarExistenciaUsuario(nuevoUsuario.correo);

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
        const usuariosRegistrados = await this.bd.leerUsuarios();
        const count = usuariosRegistrados.length;

        if (count === 0) {
          nuevoUsuario.isAdmin = true;
        }

        // Guardar el nuevo usuario en el servicio de base de datos
        await this.bd.guardarUsuario(nuevoUsuario);

        // Leer la lista de usuarios después de registrar el nuevo usuario
        await this.bd.leerUsuarios();

        showToast(`¡Usuario registrado con éxito!`);
        return Promise.resolve();
      }
    }
  }




}
