import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreateCourseComponent } from '../create-course/create-course.component';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {
  constructor(public home:HomeService,public dialog: MatDialog){}
  
  updateForm:FormGroup = new FormGroup({
    courseid:new FormControl(''),
    coursename : new FormControl(''), 
    categoryid: new FormControl(''), 
    imagename:new FormControl(''), 
  })
  @ViewChild('callDeleteDailog') callDelete !:TemplateRef<any>
  @ViewChild('callupdateDailog') callUpdate !:TemplateRef<any>
    ngOnInit(): void {

      this.home.getAllCourses();
    }
  
    deleteCourse(id:number){
   const dialogRef= this.dialog.open(this.callDelete) ;
   dialogRef.afterClosed().subscribe((result)=>{
    if(result!=undefined)
    {
      if(result=='yes')
        this.home.deleteCoures(id);
      else if(result=='no')
        console.log("Thank you ");
        
    }
   })
    }
  
  
    openCreateDailog(){
      this.dialog.open(CreateCourseComponent)
    }
    uploadImage(file:any){
      if(file.length==0)
      return ; 
      let fileToUpload = <File> file[0] ; 
      const formData = new FormData(); 
      formData.append('file',fileToUpload,fileToUpload.name); 
      this.home.uploadAttachment(formData);
    }
  p_data:any={};
  updateDailog(obj:any){
    this.p_data=obj;

    console.log(this.p_data);
      this.dialog.open(this.callUpdate);
      this.updateForm.controls['courseid'].setValue(this.p_data.courseid);

    }
    updatedCourse(){
      this.home.updateCourse(this.updateForm.value);
    }
  }