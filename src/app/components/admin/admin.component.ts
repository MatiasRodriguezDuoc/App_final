import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';
import { ApiClientService } from 'src/app/services/api-client.service';
import { ForoComponent } from '../foro/foro.component';
import { MisdatosComponent } from '../misdatos/misdatos.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ForoComponent, MisdatosComponent, FormsModule]
})
export class AdminComponent implements OnInit {

  componente_actual = 'foro'; // Puedes establecer el valor inicial según tus necesidades
  listaUsuarios: any[] = []; // Agrega la lista de usuarios aquí
  @Input() public hidden: string = this.componente_actual;


  constructor(private bd: DataBaseService, private authService: AuthService,private api: ApiClientService) { }

  ngOnInit() {
    // Llama al servicio para leer la lista de usuarios al inicializar el componente
    this.bd.listaUsuarios.subscribe(usuarios => {
      this.listaUsuarios = usuarios;
    });

    // Llama al servicio para leer la lista de usuarios
    this.bd.leerUsuarios();
  }

  cambiarComponente(nombreComponente: string) {
    this.componente_actual = nombreComponente;
    if (nombreComponente === 'foro') this.api.cargarPublicaciones();
    if (nombreComponente === 'misdatos') this.authService.leerUsuarioAutenticado();
  }

  cerrarSesion() {
    this.authService.logout();
  }

  eliminarUsuario(usuario: any): void {
    // Llama al servicio para eliminar el usuario
    this.bd.eliminarUsuarioUsandoCorreo(usuario.correo);
  }

}
