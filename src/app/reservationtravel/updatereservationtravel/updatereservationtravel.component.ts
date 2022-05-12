import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { reservationtravel } from 'src/app/modal/reservationtravel'; 
import { reservationService } from 'src/app/service/reservationService '; 

@Component({
  selector: 'app-updatereservationtravel',
  templateUrl: './updatereservationtravel.component.html',
  styleUrls: ['./updatereservationtravel.component.css']
})
export class UpdatereservationtravelComponent implements OnInit {
  id: any;
  reservation = reservationtravel;

  constructor(private router: Router,private cs: reservationService, private ac: ActivatedRoute) { }

  ngOnInit(): void {

   
  }
   
    
      updatereservationtravel() {
        this.cs.updatereservationtravel(this.reservation).subscribe(()=>this.router.navigateByUrl("/listreservation"));
        }

}

