import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {
  suma(arg0: number, arg1: number): any {
    throw new Error('Method not implemented.');
  }
  correo: string = '';
  password: string = '';
  nombre: string = '';
  apellido: string = '';
  preguntaSecreta: string = '';
  respuestaSecreta: string = '';

  mensajeError: string = '';

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async registrarse() {

    const nuevoUsuario = new Usuario();
    nuevoUsuario.correo = this.correo;
    nuevoUsuario.password = this.password;
    nuevoUsuario.nombre = this.nombre;
    nuevoUsuario.apellido = this.apellido;
    nuevoUsuario.preguntaSecreta = this.preguntaSecreta;
    nuevoUsuario.respuestaSecreta = this.respuestaSecreta;
    nuevoUsuario.isAdmin = false;

    try {
      // Llama al servicio para registrar al usuario y autenticarlo
      await this.authService.registrarUsuario(nuevoUsuario);
      this.router.navigate(['/inicio']);
    } catch (error) {
      // Maneja el caso de registro fallido
      this.mensajeError = 'Debe ingresar un correo.';
      console.error(error); // Puedes imprimir el error en la consola para obtener más detalles
    }
  }

  volverAlInicio() {
    this.router.navigate(['/inicio']); // Reemplaza '/inicio' con la ruta correcta a tu página de inicio.
  }



}
