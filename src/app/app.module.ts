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
 import { InvitationListComponent } from './invitation/invitation-list/invitation-list.component';
 import {NgxPaginationModule} from 'ngx-pagination';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { NgToastModule } from 'ng-angular-popup';
import { CompanyListComponent } from './company/company-list/company-list.component';
 import { NgChartsModule } from 'ng2-charts';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ListComponent } from './reclamation/list/list.component';
import { CreateReclamationComponent } from './reclamation/create-reclamation/create-reclamation.component';
import { CalenderComponent } from './calender/calender.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
 import { SearchCompanyComponent } from './search-Company/search-company.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
import { OrderModule } from 'ngx-order-pipe';
import { CreateCalendarComponent } from './calender/create-calendar/create-calendar.component';
import { ProgressBarModule } from 'angular-progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateCompanyComponent } from './company/update-company/update-company.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UpdateInvitationComponent } from './invitation/update-invitation/update-invitation.component';
import { SendInvitationComponent } from './invitation/send-invitation/send-invitation.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
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
  { path: 'List-Invitation' , component:InvitationListComponent },
  { path: 'statistique' , component:StatistiqueComponent },
  { path: 'Calendrier/:id' , component:CalenderComponent },
  { path: 'create-reclamation' , component: CreateReclamationComponent},
  { path: 'reclam/:id' , component:ListComponent },
  { path: 'create-Calendar' , component: CreateCalendarComponent},
  { path: 'List-employee' , component: EmployeeListComponent},
  { path: 'update-employee/:id' , component: UpdateEmployeeComponent},
  { path: 'employee-details/:id' , component: EmployeeDetailsComponent},
  { path: 'List-Company' , component: CompanyListComponent},
  { path: 'company-details/:id' , component: CompanyDetailsComponent},
  { path: 'update-company/:id' , component: UpdateCompanyComponent},
  { path: 'update-invitation/:id' , component: UpdateInvitationComponent},
  { path: 'Send-Invitation' , component: SendInvitationComponent},
  { path: 'Create-Company' , component: CreateCompanyComponent},
  { path: 'Create-Employee' , component: CreateEmployeeComponent},
  
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
    InvitationListComponent,
    SearchCompanyComponent,
     UpdateReclamationComponent,
     CreateCalendarComponent,
     EmployeeListComponent,
     UpdateEmployeeComponent,
     EmployeeDetailsComponent,
     CompanyListComponent ,
     CompanyDetailsComponent,
     UpdateCompanyComponent,
     UpdateInvitationComponent,
     SendInvitationComponent,
  CreateCompanyComponent,
  CreateEmployeeComponent


  ],
  imports: [
    NgxPaginationModule,
    NgChartsModule,
  OrderModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    ProgressBarModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
