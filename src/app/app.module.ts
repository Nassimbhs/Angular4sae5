import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CarComponent } from './car/car.component';
import { ChatComponent } from './chat/chat.component';
import { TripComponent } from './trip/trip.component';
import { ForumComponent } from './forum/forum.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';

import {NgxPaginationModule} from 'ngx-pagination';

import { NgToastModule } from 'ng-angular-popup';
import {FormsModule} from '@angular/forms'

import { InvitationListComponent } from './invitation/invitation-list/invitation-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateCompanyComponent } from './company/update-company/update-company.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UpdateInvitationComponent } from './invitation/update-invitation/update-invitation.component';
import { SendInvitationComponent } from './invitation/send-invitation/send-invitation.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';

const routes:Routes = [
  { path: 'cars' , component:CarComponent },
  { path: 'chat' , component:ChatComponent },
  { path: 'profile' , component:ProfileComponent },
  { path: 'trip' , component:TripComponent },
  { path: 'feedback' , component:FeedbackComponent },
  { path: 'forum' , component:ForumComponent },
  { path: 'invitation' , component:InvitationListComponent },
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
  { path: 'List-Invitation' , component:InvitationListComponent },
  



  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    CarComponent,
    ChatComponent,
    TripComponent,
    ForumComponent,
    ProfileComponent,
    FeedbackComponent,


   
     UpdateEmployeeComponent,
     EmployeeDetailsComponent,
     CompanyListComponent ,
     CompanyDetailsComponent,
     UpdateCompanyComponent,
     UpdateInvitationComponent,
   
     CreateCompanyComponent,
     CreateEmployeeComponent,
     EmployeeListComponent,
     InvitationListComponent,
     SendInvitationComponent
 
  ],
  imports: [
    BrowserModule,
      
    AppRoutingModule,
     FormsModule,

     HttpClientModule,
   
    RouterModule.forRoot(routes),
   
    NgToastModule,
     NgxPaginationModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
