import { Component, OnInit } from '@angular/core';
import { TravelModel } from 'src/app/modal/TravelModel'; 
import { travelService } from 'src/app/service/travelService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listtravel',
  templateUrl: './listtravel.component.html',
  styleUrls: ['./listtravel.component.css']
})
export class ListtravelComponent implements OnInit {

  listTravels : any[];

constructor(private _service:travelService,private router:Router, public listservice: travelService) { }



ngOnInit(): void {
 this.gettravel();
    
}

gettravel(){
  this._service.getTravels().subscribe(
  res=>{console.log(res);
  this.listTravels=res}
  );
  }
  

  deleteTravel(id:any) {
    this._service.deleteTravel(id).subscribe(
      res=>{
        this.gettravel();
      });
    }
   updateTravel(id:Number) {
     this.router.navigate(['update-travel',id]);
       
  }


  travelsDetails(id: number){
    this.router.navigate(['detailtravel', id]);
  }
    
}


