import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {

   path:'about',

   component:AboutUsComponent

 },

 {

   path:'contact',

   component:ContactUsComponent

 },

 {

    //http://localhost:4200/

   path:'',

   component:HomeComponent

 },
 {
  path:'courses',
  component:CoursesComponent

 },
 {
  path:'courseCard',
  component:CourseCardComponent

 },
 {
  path:'profile',
  component:ProfileComponent

 },
 

 {

   path:'security',

   loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)

 },
  {

    path:'admin',

    loadChildren:()=>import('./admin/admin.module').then(module=>module.AdminModule)

  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
