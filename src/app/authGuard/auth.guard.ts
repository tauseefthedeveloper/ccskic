import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loggedUser=localStorage.getItem('admin');
  const router=inject(Router);
  if(loggedUser != ''){
    return true;
  }
  else {
    router.navigateByUrl('/');
    return false;
  }
};