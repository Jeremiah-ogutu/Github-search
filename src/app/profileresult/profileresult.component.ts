import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';

@Component({
  selector: 'app-profileresult',
  templateUrl: './profileresult.component.html',
  styleUrls: ['./profileresult.component.css']
})
export class ProfileresultComponent implements OnInit {
  user!:User
  repoDetail =[]
  profileService!: ProfileService
  

  constructor(ProfileService: ProfileService ) { 
    this.profileService =ProfileService
  }
  

  ngOnInit(){
    this.user = this.profileService.user;
    this.repoDetail=(this.profileService.repoData);
  }



}
