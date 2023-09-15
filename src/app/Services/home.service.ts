import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 selectedCourse:any= [{}];
  display_image:any; 
 
  numberOfActiveCourse = new BehaviorSubject (0) ; 
  constructor(private http :HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService ) { }
  courses:any=[{}];
  getAllCourses(){
    
    this.spinner.show();
    this.http.get('https://localhost:7071/api/course').subscribe((resp:any)=>{
      this.courses=resp; 
      this.spinner.hide();
      console.log(resp);  
    },err=>{
      this.spinner.hide();
      this.toastr.error('Error', err.status); 
     // console.log(err.message);
    
    })
    
  }

  deleteCoures(id:number){
    debugger;
    this.http.delete('https://localhost:7071/api/course/Delete/'+id).subscribe((resp:any)=>{
      
     
      window.location.reload();
      this.toastr.success('The course Deleted Successfully')
    },err=>{
      console.log(err); 
    })
 
  }

  createCourse(body:any){
    body.imagename = this.display_image; 
   
    this.spinner.show();
    this.http.post('https://localhost:7071/api/course/',body).subscribe((resp)=>{
      this.spinner.hide();
     
      //console.log(resp.status);
      window.location.reload();
      this.toastr.success('Created Successfully')
      
    }, err=>{
      this.spinner.hide();
      this.toastr.error('Error', err.status); 
    })

   
  }

updateCourse(body:any){

  body.imagename = this.display_image; 
  this.spinner.show();
this.http.put('https://localhost:7071/api/course/update',body).subscribe((resp)=>{
  debugger;
  this.spinner.hide();
 
  window.location.reload();
  this.toastr.success('Updated Successfully')
},err=>{
  this.spinner.hide();
  this.toastr.error('Error', err.status); 
})

}

uploadAttachment(file: FormData) {
this.http.post('https://localhost:7071/api/course/uploadImage/',file).subscribe((resp:any)=>{
  this.display_image= resp.imagename; 
  console.log(resp);//object {course_name : null,price:null,startdate:null,imagename:'path'}
},err=>{
  
  this.toastr.error('Error', err.status); 
})
}

}
