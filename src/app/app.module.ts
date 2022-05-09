import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CarComponent } from './car/car.component';
import { ChatComponent } from './chat/chat.component';
import { TripComponent } from './trip/trip.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ForumComponent } from './forum/forum.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './feedback/update/update.component'
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './feedback/create/create.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
 
 

 import { NgChartsModule } from 'ng2-charts';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ListComponent } from './reclamation/list/list.component';
import { CreateReclamationComponent } from './reclamation/create-reclamation/create-reclamation.component';
import { CalenderComponent } from './calender/calender.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SearchCompanyComponent } from './search-Company/search-company.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
import { OrderModule } from 'ngx-order-pipe';
import { CreateCalendarComponent } from './calender/create-calendar/create-calendar.component';
import { ProgressBarModule } from 'angular-progress-bar';
const routes:Routes = [
  { path: 'cars' , component:CarComponent },
  { path: 'chat' , component:ChatComponent },
  { path: 'profile' , component:ProfileComponent },
  { path: 'trip' , component:TripComponent },
  { path: 'feedback' , component:FeedbackComponent },
  { path: 'SearchCompany' , component:SearchCompanyComponent },

  { path: 'reclamations' , component:ListComponent },
  { path: 'reclamations/:id' , component:ReclamationComponent },
  { path: 'create' , component:CreateComponent },
  { path: 'create-reclamation' , component: CreateReclamationComponent},
  { path: 'feedback-update/:id' , component:UpdateComponent },
  { path: 'reclamation-update/:id' , component:UpdateReclamationComponent },
  { path: 'forum' , component:ForumComponent },
  { path: 'invitation' , component:InvitationComponent },
  { path: 'statistique' , component:StatistiqueComponent },
  { path: 'Calendrier/:id' , component:CalenderComponent },
  { path: 'create-reclamation' , component: CreateReclamationComponent},
  { path: 'reclam/:id' , component:ListComponent },
  { path: 'create-Calendar' , component: CreateCalendarComponent},
];
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    CarComponent,
    ChatComponent,
    TripComponent,
    InvitationComponent,
    ForumComponent,
    ProfileComponent,
    FeedbackComponent,
    UpdateComponent,
    CreateComponent,
    ReclamationComponent,
    StatistiqueComponent,
    ListComponent,
    CreateReclamationComponent,
    CalenderComponent,
  
    SearchCompanyComponent,
       UpdateReclamationComponent,
       CreateCalendarComponent
  ],
  imports: [
    NgChartsModule,
  OrderModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    ProgressBarModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
