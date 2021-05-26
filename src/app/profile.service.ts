import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{User} from './user'
import { from } from 'rxjs';
import{Repository} from './repository'
// import { rejects } from 'assert';
// import { BinaryOperatorExpr } from '@angular/compiler';
// import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user!: User;
  repository!: Repository;
  repoData =[];
  newUserData:any = []

  constructor(private http:HttpClient) { 
    this.user =new User("","",0,"")
    this.repository = new Repository("","","")
  }
  // getProfileData(){
  //   return this.http.get("https://api.github.com/users/Jeremiah-ogutu")
  // };

  getUserData(username: string){
    interface APIResponse{
    //   bio:string
    //   public_repos:number
    //   login:string
    //   avatar_url: string
    }
    let promise = new Promise<void>((resolve,rejects)=>{
      this.http.get<APIResponse>("https://api.github.com/users/"+username).toPromise().then(response=>{
        // this.user.bio = response.bio;
        // this.user.public_repos = response.public_repos;
        // this.user.login = response.login;
        // this.user.avatar_url= response.avatar_url;

        resolve();
    },
    error=>{
      rejects(error)
    })
    this.http.get<any>("https://api.github.com/users/"+username + "/repos").toPromise().then(response =>{
      for(let i=0; i<response.length; i++){
        this.newUserData = new Repository(response[i].name,response[i].updated_at,response[i].language);
        // this.repoData.push(this.newUserData);

      }
      resolve()
    },error=>{
      rejects(error)
    }) 
  
   })
  return promise;

    
  }

  getProfileData(){
    return this.http.get("https://api.github.com/users/Jeremiah-ogutu");
  }

  
}
