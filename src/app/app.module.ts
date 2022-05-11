import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

import { CarComponent } from './car/car.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatRadioModule } from '@angular/material/radio';
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
import { ListChatComponent } from './chat/list-chat/list-chat.component';
import { UpdateChatComponent } from './chat/update-chat/update-chat.component';
import { DeleteChatComponent } from './chat/delete-chat/delete-chat.component';
import { ToastsContainer } from './forum/toasts/toasts-container.component';
import { AddChatComponent } from './chat/add-chat/add-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostService } from './forum/services/forum.service';
import {MatInputModule} from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    AddCarComponent,
    ToastsContainer,
    DeleteCarComponent,
    UpdateCarComponent,
    ListCarComponent,
    ListChatComponent,
    UpdateChatComponent,
    DeleteChatComponent,
    AddChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    [
      MDBBootstrapModule.forRoot()
  ],
    MatSelectModule,
    NgbModule
  ],
  providers: [PostService
    ,  { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill' , floatLabel: 'always'}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
