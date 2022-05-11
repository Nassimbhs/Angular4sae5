import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ChatComponent } from './chat/chat.component';
import { TripComponent } from './trip/trip.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ForumComponent } from './forum/forum.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { DeleteCarComponent } from './car/delete-car/delete-car.component';
import { UpdateCarComponent } from './car/update-car/update-car.component';
import { ListCarComponent } from './car/list-car/list-car.component';
import { CarComponent } from './car/car.component';
const routes:Routes = [
  {path : "" , component: ContentComponent},
  { path: 'cars' , component:CarComponent },
  { path: 'chat' , component:ChatComponent },
  { path: 'profile' , component:ProfileComponent },
  { path: 'trip' , component:TripComponent },
  { path: 'feedback' , component:FeedbackComponent },
  { path: 'forum' , component: ForumComponent },
  { path: 'invitation' , component:InvitationComponent },
  { path: 'addCar' , component:AddCarComponent },
  { path: 'updateCar/:id' , component:UpdateCarComponent },
  { path: 'deleteCar' , component:DeleteCarComponent },
  { path: 'listCar' , component:ListCarComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
