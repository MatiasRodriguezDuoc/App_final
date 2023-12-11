import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const inicioGuard: CanActivateFn = async (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuthenticated = await authService.isAuthenticated(); 

  if (isAuthenticated) {
    const isAdmin = authService.isAdmin();
    if (isAdmin) {
      // Si el usuario es administrador y no está en la página de "admin", redirigir a la página de inicio del administrador
      if (state.url !== '/admin') {
        return true;
      }
    } else {
      // Si el usuario no es administrador y no está en la página de "inicio", redirigir a la página de inicio normal
      if (state.url !== '/inicio') {
        router.navigate(['inicio']);
      }
    }
    return true;
  } else {
    // Si el usuario no está autenticado y no está en la página de "ingreso", redirigir a la página de ingreso
    if (state.url !== '/ingreso') {
      router.navigate(['ingreso']);
    }
    return false;
  }

}