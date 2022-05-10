import { InvoiceComponent } from './front/invoice/invoice.component';
import { PaypalComponent } from './front/paypal/paypal.component';
import { FrontDetailCarComponent } from './front/front-detail-car/front-detail-car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './car/add-car/add-car.component';
import { DeleteCarComponent } from './car/delete-car/delete-car.component';
import { DetailComponent } from './car/detail/detail.component';
import { ListCarComponent } from './car/list-car/list-car.component';
import { StatComponent } from './car/stat/stat.component';
import { UpdateCarComponent } from './car/update-car/update-car.component';
import { AddChatComponent } from './chat/add-chat/add-chat.component';
import { FrontListCarComponent } from './front/front-list-car/front-list-car.component';

const routes:Routes = [
  { path: 'addCar' , component:AddCarComponent },
  { path: 'updateCar/:id' , component:UpdateCarComponent },
  { path: 'deleteCar' , component:DeleteCarComponent },
  { path: 'listCar' , component:ListCarComponent },
  { path: 'detailCar/:id' , component:DetailComponent },
  { path: 'addChat' , component:AddChatComponent },
  { path: 'statCar' , component:StatComponent },
  { path: 'frontListCar' , component:FrontListCarComponent },
  { path: 'frontDetailCar/:id' , component:FrontDetailCarComponent },
  { path: 'paypal' , component:PaypalComponent },
  { path: 'invoice' , component:InvoiceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
