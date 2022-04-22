import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/modal/car';
import { carService } from 'src/app/service/carService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent implements OnInit {

  car : Car = new Car();
  constructor(private c:carService, private _router:Router) { }

  addCar(){
    
    console.log("car : "+ this.car.StartDateLocation);
    this.c.addCar(this.car).subscribe(()=>this._router.navigateByUrl("/listCar"));
  }
  
  ngOnInit(): void {

  }
  
}
