import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/authService.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const _auth=inject(AuthServiceService);
  const _router=inject(Router);
  if(_auth.verifytoken()){
    _router.navigateByUrl('http://localhost:4200/dashboard/control-flow');
    return false;
  }else{
    return true;
  }
  return true;
};
