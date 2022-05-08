import { Component, OnInit } from '@angular/core';
import { reservationtravel } from 'src/app/modal/reservationtravel'; 
import { reservationService } from 'src/app/service/reservationService '; 

import { Router } from '@angular/router';


@Component({
  selector: 'app-listreservation',
  templateUrl: './listreservation.component.html',
  styleUrls: ['./listreservation.component.css']
})
export class ListreservationComponent implements OnInit {
  listreservation : any[];

  constructor(private _service:reservationService,private router:Router) { }

  ngOnInit(): void {
    this.getreservation();
   
  }

  getreservation(){
    this._service.getreservation().subscribe(
    res=>{console.log(res);
    this.listreservation=res}
    );
    }
    deletereservation(id:any) {
      this._service.deletereservation(id).subscribe(
        res=>{
          this.getreservation;
        });
      }

      updatereservation(id:Number) {
        this.router.navigate(['updatereservation',id]);
          
     }

    
  
}