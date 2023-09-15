import { Component } from '@angular/core';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
constructor(public home:HomeService){}
}
