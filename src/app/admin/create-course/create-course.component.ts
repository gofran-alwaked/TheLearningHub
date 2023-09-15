import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  constructor(private home:HomeService){}
createCourse:FormGroup = new FormGroup({
  Coursename : new FormControl('',Validators.required), 
  Categoryid: new FormControl('',Validators.required), 
  Imagename:new FormControl('',Validators.required), 
})
save(){
  debugger;
this.home.createCourse(this.createCourse.value);
}

uploadImage(file:any){
  if(file.length==0)
  return ; 
  let fileToUpload = <File> file[0] ; 
  const formData = new FormData(); 
  formData.append('file',fileToUpload,fileToUpload.name); 
  this.home.uploadAttachment(formData);
}
}