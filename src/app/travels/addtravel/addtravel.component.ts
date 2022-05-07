import { Component, OnInit } from '@angular/core';
import { TravelModel } from 'src/app/modal/TravelModel'; 
import { travelService } from 'src/app/service/travelService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtravel',
  templateUrl: './addtravel.component.html',
  styleUrls: ['./addtravel.component.css']
})
export class AddtravelComponent implements OnInit {

  travel : TravelModel=new TravelModel();
  constructor(private t:travelService, private _router:Router) { }

  addTravel(){
    console.log("this is start date :"+this.travel.startdate);
    this.t.addTravel(this.travel).subscribe(()=>this._router.navigateByUrl("/list-travel"));
  }
  ngOnInit(): void {
  }
 
    
  


}
