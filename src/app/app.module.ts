import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
<<<<<<< HEAD
import { CarComponent } from './car/car.component';
=======
>>>>>>> Nassim
import { ChatComponent } from './chat/chat.component';
import { TripComponent } from './trip/trip.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ForumComponent } from './forum/forum.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TravelsComponent } from './travels/travels.component';
import { AddtravelComponent } from './travels/addtravel/addtravel.component';
<<<<<<< HEAD

const routes:Routes = [
  { path: 'cars' , component:CarComponent },
  { path: 'chat' , component:ChatComponent },
  { path: 'profile' , component:ProfileComponent },
  { path: 'trip' , component:TripComponent },
  { path: 'feedback' , component:FeedbackComponent },
  { path: 'forum' , component:ForumComponent },
  { path: 'invitation' , component:InvitationComponent },
=======
import { AddCarComponent } from './car/add-car/add-car.component';
import { DeleteCarComponent } from './car/delete-car/delete-car.component';
import { UpdateCarComponent } from './car/update-car/update-car.component';
import { ListCarComponent } from './car/list-car/list-car.component';
import { ListChatComponent } from './chat/list-chat/list-chat.component';
import { UpdateChatComponent } from './chat/update-chat/update-chat.component';
import { DeleteChatComponent } from './chat/delete-chat/delete-chat.component';
import { AddChatComponent } from './chat/add-chat/add-chat.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  { path: 'addCar' , component:AddCarComponent },
  { path: 'updateCar/:id' , component:UpdateCarComponent },
  { path: 'deleteCar' , component:DeleteCarComponent },
  { path: 'listCar' , component:ListCarComponent },
>>>>>>> Nassim

  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
<<<<<<< HEAD
    CarComponent,
=======
>>>>>>> Nassim
    ChatComponent,
    TripComponent,
    InvitationComponent,
    ForumComponent,
    ProfileComponent,
<<<<<<< HEAD
    FeedbackComponent,
TravelsComponent,
AddtravelComponent
=======
    FeedbackComponent,
    AddCarComponent,
    DeleteCarComponent,
    UpdateCarComponent,
    ListCarComponent,
    ListChatComponent,
    UpdateChatComponent,
    DeleteChatComponent,
    AddChatComponent
>>>>>>> Nassim
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
=======
    HttpClientModule,
    FormsModule,
>>>>>>> Nassim
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
