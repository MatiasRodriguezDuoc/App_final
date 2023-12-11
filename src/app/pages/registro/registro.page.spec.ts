import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistroPage } from './registro.page';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['registrarUsuario']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), CommonModule, FormsModule, RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  }));

  it('deberia crearse', () => {
    expect(component).toBeTruthy();
  });

  it('should handle registration failure', async () => {
    authService.registrarUsuario.and.returnValue(Promise.reject());
    await component.registrarse();

    // Assert
    expect(authService.registrarUsuario).toHaveBeenCalled();
    expect(component.mensajeError).toBe('Hubo un problema al registrar el usuario.');
  });

  it('Debería asignar correo y contraseña a nombre de Ana Torres', () => {
    component.correo = 'atorres@duocuc.cl';
    component.password = '1234';
    expect(component.correo).toBe('atorres@duocuc.cl');
    expect(component.password).toBe('1234');
  });

  it('Debería asignar valores a las propiedades del usuario al registrarse', async () => {
    spyOn(authService, 'registrarUsuario').and.callThrough();
    component.correo = 'test@example.com';
    component.password = 'test123';
    component.nombre = 'John';
    component.apellido = 'Doe';
    component.preguntaSecreta = 'animal';
    component.respuestaSecreta = 'gato';

    await component.registrarse();

    // Agrega expectativas según tu lógica de registro
    expect(authService.registrarUsuario).toHaveBeenCalledOnceWith(jasmine.any(Usuario));
  });

  it('Debería mostrar un mensaje de error si falta el correo al registrarse', async () => {
    component.correo = '';
    component.password = 'test123';
    component.nombre = 'John';
    component.apellido = 'Doe';
    component.preguntaSecreta = 'animal';
    component.respuestaSecreta = 'gato';

    await component.registrarse();

    expect(component.mensajeError).toEqual('Debe ingresar un correo.');
  });

  it('Debería navegar a la página de inicio después de un registro exitoso', async () => {
    component.correo = 'test@example.com';
    component.password = 'test123';
    component.nombre = 'John';
    component.apellido = 'Doe';
    component.preguntaSecreta = 'animal';
    component.respuestaSecreta = 'gato';

    await component.registrarse();

    expect(router.navigate).toHaveBeenCalledWith(['/inicio']);
  });
});
