import { Component, OnInit } from '@angular/core';
import { TravelModel } from 'src/app/modal/TravelModel';  
import { Router, ActivatedRoute } from '@angular/router';
import { travelService } from 'src/app/service/travelService';
import { RatingService } from 'src/app/service/rating.service';
import { Rating } from 'src/app/modal/rating';
@Component({
  selector: 'app-detailusers',
  templateUrl: './detailusers.component.html',
  styleUrls: ['./detailusers.component.css']
})
export class DetailusersComponent implements OnInit {
  currentRate : number =3;
  id: number;
  travelmodel: TravelModel;
  image:string
  images:any
  rating: Rating
  constructor(private route: ActivatedRoute,private router: Router,
    private t:travelService,
    private ratingService:RatingService
    )  { }


    ratingChange($event){
      

      this.rating=new Rating();
      this.rating.idTrip=this.travelmodel.id;
      this.rating.idUser=1;
      this.rating.value=this.currentRate;
      this.ratingService.addrating(this.rating).subscribe((data)=>{
        console.log('aaa');
      },err=>{
        console.log('aaaaaa');   
         });
  
    } 
  ngOnInit(): void {
   
    this.travelmodel = new TravelModel();
    this.id = this.route.snapshot.params['id'];
    this.ratingService.getRatingByUserTrip(1,this.id).subscribe((data)=>{
      console.log('aaaaaaaaaaa');
      this.rating=data;
      this.currentRate= this.rating.value;
    });

    this.t.getTravelByid(this.id)
      .subscribe(data => {
        console.log(data)
        this.travelmodel = data;
        this.t.loadImage(this.travelmodel.image.idImage).subscribe
        ((image:any) => {
          this.images = ('data:'+ image.type +';base64,'+ image.image)
          console.log(this.images);
        })
      }, error => console.log(error));
    
      }
    
  list(){
    this.router.navigate(['listreservation']);
  }
   


}
