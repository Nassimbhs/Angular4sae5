import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelModel } from 'src/app/modal/TravelModel'; 
import { travelService } from 'src/app/service/travelService';

@Component({
  selector: 'app-updatetravel',
  templateUrl: './updatetravel.component.html',
  styleUrls: ['./updatetravel.component.css']
})
export class UpdatetravelComponent implements OnInit {
  id: any;
  travel: TravelModel;

constructor(private router: Router,private cs: travelService, private ac: ActivatedRoute)
{}
  
  
  ngOnInit(): void {
  this.ac.params.subscribe(params=>{this.id=params['id']});
  this.updateTravelByid(this.id);
  
  }
  updateTravelByid(id){
    this.cs.updateTravelByid(id).subscribe(res=>{ 
      console.log(res);
      this.travel=res});
  }

  updateTravel() {
    this.cs.updateTravel(this.travel).subscribe(()=>this.router.navigateByUrl("/list-travel"));
    }
}
