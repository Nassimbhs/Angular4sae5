import { Component, OnInit } from '@angular/core';
import { reservationtravel } from 'src/app/modal/reservationtravel'; 
import { reservationService } from 'src/app/service/reservationService ';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.css']
})
export class AddreservationComponent implements OnInit {
  
 
  reservation : reservationtravel=new reservationtravel();
  constructor(private r:reservationService, private _router:Router) { }

  addreservation(){
    
    this.r.addreservation(this.reservation).subscribe(()=>this._router.navigateByUrl("/listreservation"));
  }
  ngOnInit(): void {
  }

}