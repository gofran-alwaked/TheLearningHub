import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SidebarComponent,
    DashboardComponent,
    CreateCourseComponent,
    ManageCourseComponent,
    
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
