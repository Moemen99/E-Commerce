import { Component } from '@angular/core';
import { FormGroup ,FormControl ,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private _AuthService:AuthService){

  }
  registerForm:FormGroup =new FormGroup({
    name:new FormControl(null, [Validators.required ,Validators.minLength(3) ,Validators.maxLength(10)]),
    email:new FormControl(null ,[Validators.email ,Validators.required]),
    password:new FormControl(null ,[Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/), Validators.required]),
    rePassword:new FormControl(null ,[Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/), Validators.required]),
    phone:new FormControl(null ,[Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  });

  handleRegister(registerForm :FormGroup){
    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe({
        next:(response)=>console.log(response),
        error:(err)=> console.log(err)
      });
    }
    console.log(registerForm.value);
    
  }

}
