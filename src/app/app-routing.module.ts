import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListtravelComponent } from './travels/listtravel/listtravel.component'; 
import { DetailtravelComponent } from './travels/detailtravel/detailtravel.component';
import {AddtravelComponent} from './travels/addtravel/addtravel.component';

const routes: Routes = [
  
   { path: "add-travel", component : AddtravelComponent},
 
   { path: "list-travel", component  : ListtravelComponent },
   { path: "detailtravel/:id", component : DetailtravelComponent  },

   { path: "", redirectTo : "travels", pathMatch:"full"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
