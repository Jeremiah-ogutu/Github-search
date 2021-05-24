import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http'
// import { profile } from 'console';
import { ProfileService } from './profile.service';
import { ProfileresultComponent } from './profileresult/profileresult.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
