import { Component, OnInit } from '@angular/core';
import { TravelModel } from 'src/app/modal/TravelModel';  
import { Router, ActivatedRoute } from '@angular/router';
import { travelService } from 'src/app/service/travelService';

@Component({
  selector: 'app-detailtravel',
  templateUrl: './detailtravel.component.html',
  styleUrls: ['./detailtravel.component.css']
})
export class DetailtravelComponent implements OnInit {
  currentRate : number =3;
  id: number;
  travelmodel: TravelModel;
  image:string
  images:any
 
  constructor(private route: ActivatedRoute,private router: Router,
    private t:travelService)  { }
  ngOnInit(): void {
   
    this.travelmodel = new TravelModel();
    this.id = this.route.snapshot.params['id'];
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


