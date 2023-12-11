import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const ingresoGuard: CanActivateFn = async (route, state) => {
  const authService  = inject(AuthService);
  const router = inject(Router);
  const isAuthenticated = await authService.isAuthenticated();

  if (isAuthenticated) {
    if (state.url !== '/ingreso') { // Add this condition to prevent infinite loop
      router.navigate(['ingreso']);
    }
    return false;
  } else {
    return true; // Return false instead of true to prevent navigation
  }
};
