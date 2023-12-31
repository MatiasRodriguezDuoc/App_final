import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CorrectoPage implements OnInit {

  constructor(private authService: AuthService, private router: Router, private bd: DataBaseService, private toastController: ToastController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      this.password = params['password'];
    });
  }

  password = '';

  ngOnInit() {
  }
  volverAlInicio() {
    this.router.navigate(['/inicio']); // Reemplaza '/inicio' con la ruta correcta a tu página de inicio.
  }

}
