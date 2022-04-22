import { Component, OnInit } from '@angular/core';
import { carService } from './../../service/carService';
import { Car } from 'src/app/modal/car';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  listCars : any[];
  
  constructor(private _service:carService,private router:Router) {}

  
  ngOnInit(): void {
    this.getCar();
  }

  getCar(){
    this._service.getCars().subscribe(res=>{console.log(res);
    this.listCars=res});
  }
  
  deleteCar(id: any) {
    this._service.deleteCar(id).subscribe(res => {
      this.getCar()
    });
  }

  updateCar(id: number){
    this.router.navigate(['updateCar', id]);
  }
 
}
