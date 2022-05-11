import { Component, OnInit } from '@angular/core';
import { TravelModel } from 'src/app/modal/TravelModel'; 
import { Image } from 'src/app/modal/Image'; 
import { travelService } from 'src/app/service/travelService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addtravel',
  templateUrl: './addtravel.component.html',
  styleUrls: ['./addtravel.component.css']
})
export class AddtravelComponent implements OnInit {

  travel : TravelModel=new TravelModel();
  uploadedImage: File;
  image: any;
  response: any
 
  constructor(private t:travelService,private _router:Router) {

   }

  addTravel(){
    console.log("this is start date :"+this.travel.startdate);
   console.log("this img:" +this.uploadedImage);
    this.t.uploadImage(this.uploadedImage, this.uploadedImage.name).subscribe((response: any) => {
      this.t.loadImage(response.idImage).subscribe((image: any) => {
        let img = new Image();
        img.idImage = image.idImage
        img.name = image.name
        img.type = image.type
        img.image = image.image
        this.travel.image = new Image()
        this.travel.image = img
    
    this.t.addTravel(this.travel).subscribe(
      ()=>this._router.navigateByUrl("/list-travel"));

      }
     )
    } 
     )
     
} 
      
  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  ngOnInit(): void {
   
  }


 
    
  


}
