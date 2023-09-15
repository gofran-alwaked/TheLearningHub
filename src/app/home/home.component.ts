import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public home : HomeService;
constructor(public homeS : HomeService , private toastr:ToastrService){
 this.home= homeS;
}
ngOnInit(): void { 
  // this.toastr.success('Success'); 
  // this.toastr.info('Info Message'); 
  // this.toastr.warning('warning Message'); 
  // this.toastr.error('error Message'); 
 // this.alertActiveCourse() ;
 setInterval(()=>{
  this.homeS.numberOfActiveCourse.next( this.homeS.numberOfActiveCourse.value+1);
 },3000)
}
alertActiveCourse() {
this.homeS.numberOfActiveCourse.subscribe((value)=>{
  alert(`Number of Active Course ${value}`)
})
}




}
