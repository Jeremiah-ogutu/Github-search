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

 
  //   error{
  //     rejects(error);
  //     )
  //   }
  //   this.http.get<any>
  //  })

    
  // }

  // getProfileData(){
  //   return this.http.get("https://api.github.com/users/Jeremiah-ogutu");
  // }

  
}
