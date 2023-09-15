import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(public home:HomeService , private spinner:NgxSpinnerService ){}
  LoginForm:FormGroup = new FormGroup({
    Email:new FormControl ('ex@example.com',[Validators.required,Validators.email]),
    Password:new FormControl ('********',[Validators.required,Validators.minLength(8)]),
  
})
ngOnInit() {
  const storedEmail = localStorage.getItem('name');
  const storedPassword = localStorage.getItem('Password');

  if (storedEmail && storedPassword) {
    this.LoginForm.setValue({
      Email: storedEmail,
      Password: storedPassword
    });
  }
}

LoginMessage:string='';
Submit(){
  this.spinner.show();
  setTimeout(()=>{
    this.spinner.hide();
  },3000)
  
  localStorage.setItem('name', this.LoginForm.controls['Email'].value);
  localStorage.setItem('Password', this.LoginForm.controls['Password'].value);
  this.LoginMessage = "You are logged In";
  }


}
