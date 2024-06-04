import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/authService.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _auth=inject(AuthServiceService);
  const _router=inject(Router);
  if(_auth.verifytoken()){
    return true;
  }else{
    _router.navigateByUrl('http://localhost:4200/dashboard/Login');
    return false;
  }
  return true;
};
