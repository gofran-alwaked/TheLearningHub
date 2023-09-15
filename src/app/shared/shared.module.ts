import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import{HttpClientModule}from  '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule
  ]
  
})
export class SharedModule { }
