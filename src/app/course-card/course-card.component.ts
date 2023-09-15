import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  constructor(private router:Router, public home:HomeService){}
@Input() course_Id:number|undefined;
@Input() course_Name:string|undefined;
@Input() category_Id:number|undefined;
@Input() image_Name:string|undefined;
@Output() openProfile =new EventEmitter;

showProfile(){
  this.home.selectedCourse ={
    courseId:this.course_Id,
    name:this.course_Name,
  }
  this.openProfile.emit();
}
}