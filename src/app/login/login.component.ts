import { Component } from '@angular/core';
import { FormGroup ,FormControl ,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){
    if (localStorage.getItem('userToken') !== null){
      _Router.navigate(['/home'])
    }
}
isLoading:Boolean=false;
apiError:string='';
loginForm:FormGroup =new FormGroup({
  email:new FormControl(null ,[Validators.email ,Validators.required]),
  password:new FormControl(null ,[Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/), Validators.required]),
});
handleLogin(loginForm :FormGroup){
  this.isLoading=true;
  if(loginForm.valid){
    this._AuthService.login(loginForm.value).subscribe({
      next:(response)=>{
        if(response.message === 'success'){
          this.isLoading=false;
          localStorage.setItem('userToken',response.token)
          this._AuthService.DecodeUserData();
          //Navigate login
          this._Router.navigate(['/home'])
        }
        console.log(response)},
      error:(err)=> {console.log(err.error.message);
        this.apiError=err.error.message;
      this.isLoading=false;}
    });
  }
  console.log(loginForm.value);
  
}
}