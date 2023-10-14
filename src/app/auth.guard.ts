// import { CanActivateFn, Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {

 

//   if(localStorage.getItem('userToken')!== null){

//     return true;
//   }else{
    
//     return false;
//   }
// };

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn :'root'
})
export class authGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable <boolean | UrlTree> | Promise<boolean | UrlTree>  | boolean | UrlTree
    {
    if (localStorage.getItem('userToken') !== null) {
      return true;
    } else {
      // Navigate to the login route when the user is not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
}






