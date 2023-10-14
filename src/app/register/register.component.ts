import { Component } from '@angular/core';
import { FormGroup ,FormControl ,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){
    if (localStorage.getItem('userToken') !== null){
      _Router.navigate(['/home'])
    }
  }
  isLoading:Boolean=false;
  apiError:string='';
  registerForm:FormGroup =new FormGroup({
    name:new FormControl(null, [Validators.required ,Validators.minLength(3) ,Validators.maxLength(10)]),
    email:new FormControl(null ,[Validators.email ,Validators.required]),
    password:new FormControl(null ,[Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/), Validators.required]),
    rePassword:new FormControl(null ,[Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/), Validators.required]),
    phone:new FormControl(null ,[Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  });
  handleRegister(registerForm :FormGroup){
    this.isLoading=true;
    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe({
        next:(response)=>{
          if(response.message === 'success'){
            this.isLoading=false;
            //Navigate login
            this._Router.navigate(['/login'])
          }
          console.log(response)},
        error:(err)=> {console.log(err.error.message);
          this.apiError=err.error.message;
        this.isLoading=false;}
      });
    }
    console.log(registerForm.value);
    
  }
}
