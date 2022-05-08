import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

import { TripComponent } from './trip/trip.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ForumComponent } from './forum/forum.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TravelsComponent } from './travels/travels.component';
import { FormsModule } from '@angular/forms';
import { AddtravelComponent } from './travels/addtravel/addtravel.component';
import { HttpClientModule } from '@angular/common/http';
import { ListtravelComponent } from './travels/listtravel/listtravel.component'; 
import { DetailtravelComponent } from './travels/detailtravel/detailtravel.component';
import { UpdatetravelComponent } from './travels/updatetravel/updatetravel.component';
import { ListtravlesusersComponent } from './travels/listtravlesusers/listtravlesusers.component';
import { ReservationtravelComponent } from './reservationtravel/reservationtravel.component';
import { AddreservationComponent } from './travels/addreservation/addreservation.component';
import { ListreservationComponent } from './reservationtravel/listreservation/listreservation.component';

const routes:Routes = [

  { path: 'profile' , component:ProfileComponent },
  { path: 'trip' , component:TripComponent },
  { path: 'feedback' , component:FeedbackComponent },
  { path: 'forum' , component:ForumComponent },
  { path: 'invitation' , component:InvitationComponent },
  { path: "add-travel", component : AddtravelComponent},
  { path: "addreservation", component : AddreservationComponent},
  { path: "detailtravel", component : DetailtravelComponent },
  { path: "list-travel", component : ListtravelComponent},
  { path: "listreservation", component : ListreservationComponent},
  { path: "list-travelusers", component : ListtravlesusersComponent},

  
 
 

  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
 
    TripComponent,
    InvitationComponent,
    ForumComponent,
    ProfileComponent,
    FeedbackComponent,
    TravelsComponent,
    AddtravelComponent,
    ListtravelComponent,
    DetailtravelComponent,
    UpdatetravelComponent,
    ListtravlesusersComponent,
    ReservationtravelComponent,
    AddreservationComponent,
    ListreservationComponent,
    
    
    
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    RouterModule.forRoot(routes),
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
