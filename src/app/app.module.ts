import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ChatComponent } from './chat/chat.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { DeleteCarComponent } from './car/delete-car/delete-car.component';
import { UpdateCarComponent } from './car/update-car/update-car.component';
import { ListCarComponent } from './car/list-car/list-car.component';
import { ListChatComponent } from './chat/list-chat/list-chat.component';
import { UpdateChatComponent } from './chat/update-chat/update-chat.component';
import { DeleteChatComponent } from './chat/delete-chat/delete-chat.component';
import { AddChatComponent } from './chat/add-chat/add-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailComponent } from './car/detail/detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatComponent } from './car/stat/stat.component';
import { FrontListCarComponent } from './front/front-list-car/front-list-car.component';
import { FrontDetailCarComponent } from './front/front-detail-car/front-detail-car.component';
import { DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { PaypalComponent } from './front/paypal/paypal.component';
import { InvoiceComponent } from './front/invoice/invoice.component';
import {NgxPayPalModule} from 'ngx-paypal';
import { PaymentComponent } from './front/payment/payment.component';
import { NgxStripeModule } from 'ngx-stripe';
import { ModalComponent } from './front/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    ChatComponent,
    AddCarComponent,
    DeleteCarComponent,
    UpdateCarComponent,
    ListCarComponent,
    ListChatComponent,
    UpdateChatComponent,
    DeleteChatComponent,
    AddChatComponent,
    DetailComponent,
    StatComponent,
    FrontListCarComponent,
    FrontDetailCarComponent,
    PaypalComponent,
    InvoiceComponent,
    PaymentComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgbModule,
    NgbModalModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    NgxStripeModule.forRoot('pk_test_51KX1K0E0eqielpuruy9lPD5F6fKFhdjJzjXYQBVQcQ0G6PHS0McLq4R0oXlOGl7Q92uz03GCuS6Y9AvMyHg9FQ96008kqDGUrM'),
  ],
  entryComponents: [ModalComponent],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
