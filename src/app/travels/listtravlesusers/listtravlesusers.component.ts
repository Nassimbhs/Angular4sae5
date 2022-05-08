import { Component, OnInit } from '@angular/core';
import { TravelModel } from 'src/app/modal/TravelModel'; 
import { travelService } from 'src/app/service/travelService';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-listtravlesusers',
  templateUrl: './listtravlesusers.component.html',
  styleUrls: ['./listtravlesusers.component.css']
})
export class ListtravlesusersComponent implements OnInit {

  listTravels : any[];
  image: any;
  listImages : String[] = []

  constructor(private _service:travelService,private router:Router, public listservice: travelService) { }


  
  ngOnInit(): void {
    this.gettravel();
  }


  gettravel(){
    this._service.getTravels().subscribe(
  
    res=>{console.log(res);
    this.listTravels=res
    for (let index = 0; index < this.listTravels.length; index++) {
      this._service.loadImage(this.listTravels[index].image.idImage).subscribe((res: any) => {
        //console.log(res.name)
        this.listImages[index] = ('data:' + res.type + ';base64,' + res.image)
      })
    }
  
  
  }
    
    );
    
    }

    addreservation(id: any){
      this.router.navigate(['addreservation', id]);
    }

   
    travelsDetails(id: number){
      this.router.navigate(['detailtravel', id]);
    }
  

}