import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{User} from './user'
import { from } from 'rxjs';
import{Repository} from './repository'
import { rejects } from 'assert';
import { BinaryOperatorExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user!: User;
  repository!: Repository;
  repoData =[];

  constructor(private http:HttpClient) { 
    this.user =new User("","",0,"")
    this.repository = new Repository("","","")
  }

  getUserData(username: string){
    interface APIResponse{
      bio:string
      public_repos:number
      login:string
      avatar_url: string
    }
    let promise = new Promise<void>((resolve,rejects)=>{
      this.http.get<APIResponse>("https://api.github.com/users/"+username).toPromise().then(response=>{
        this.user.bio = response.bio;
        this.user.public_repos = response.public_repos;
        this.user.login = response.login;
        this.user.avatar_url= response.avatar_url;

        resolve();
    })

   })

    
  }

  // getProfileData(){
  //   return this.http.get("https://api.github.com/users/Jeremiah-ogutu");
  // }

  
}
