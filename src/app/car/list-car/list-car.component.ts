import { Component, OnInit } from '@angular/core';
import { carService } from './../../service/carService';
import { Router } from '@angular/router';
import { Car } from 'src/app/modal/car';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  listCars: any[];
  cars : Car [] = [];
  p: number = 1;
  carModel: any;
  key: String = 'id';
  reverse: boolean = false;

  constructor(private _service: carService, private router: Router) { }


  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this._service.getCars().subscribe(res => {
      console.log(res);
      this.listCars = res
    });
  }

  deleteCar(id: any) {
    this._service.deleteCar(id).subscribe(res => {
      this.getCar()
    });
  }

  updateCar(id: number) {
    this.router.navigate(['updateCar', id]);
  }

  DetailCar(id: number) {
    this.router.navigate(['detailCar', id]);
  }

  search() {
    if (this.carModel == "")
    {
      return this.ngOnInit();
    }else
    {
      this.listCars = this.listCars.filter(res => {  
        console.log("testtt "+res.carModel.toLocaleLowerCase().match(this.carModel.toLocaleLowerCase()))
        return res.carModel.toLocaleLowerCase().match(this.carModel.toLocaleLowerCase());
        
      });  
    } 
    }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }


  
}
