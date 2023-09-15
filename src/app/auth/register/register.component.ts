import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private spinner:NgxSpinnerService){}
  registerForm:FormGroup = new FormGroup({
    FullName:new FormControl (' ',Validators.required),
    Email:new FormControl ('ex@example.com',[Validators.required,Validators.email]),
    Password:new FormControl ('********',[Validators.required,Validators.minLength(8)]),
    ConfirmPassword:new FormControl ('********'),
  
})

ngOnInit() {
  const storedEmail = localStorage.getItem('name');
  const storedPassword = localStorage.getItem('Password');

  if (storedEmail && storedPassword) {
    this.registerForm.setValue({
      Email: storedEmail,
      Password: storedPassword
    });
  }
}


submit(){
  this.spinner.show();
  setTimeout(()=>{
    this.spinner.hide();
  },3000)
  
  localStorage.setItem('name', this.registerForm.controls['Email'].value);
  localStorage.setItem('Password', this.registerForm.controls['Password'].value);
  }
matchError(){
  if(this.registerForm.controls['Password'].value == this.registerForm.controls['ConfirmPassword'].value)
  this.registerForm.controls['ConfirmPassword'].setErrors(null)
else
this.registerForm.controls['ConfirmPassword'].setErrors({missMatch:true});

}
}
