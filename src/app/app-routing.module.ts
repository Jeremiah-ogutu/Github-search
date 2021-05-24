import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { profile } from 'console';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'profile', component:ProfileComponent },
  {path: 'profileresult', component:ProfileComponent },
  // {path: 'repository', component:repositor}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
