import { Component, OnInit } from '@angular/core';
import { TravelModel } from 'src/app/modal/TravelModel'; 
import { travelService } from 'src/app/service/travelService';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { SearchcritereService } from 'src/app/service/searchcritere.service';

@Component({
  selector: 'app-listtravel',
  templateUrl: './listtravel.component.html',
  styleUrls: ['./listtravel.component.css']
})
export class ListtravelComponent implements OnInit {

  listTravels : any[];
  image: any;
  listImages : String[] = []
  SearchCritere : any[];

constructor(private _service:travelService,private router:Router, public listservice: travelService, private searchcritereService:SearchcritereService) { }



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

  

  

      
  
    
    
 
    
  
  

  deleteTravel(id:any) {
    this._service.deleteTravel(id)
    .subscribe(
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


