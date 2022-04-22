import { Car } from 'src/app/modal/car';
import { ActivatedRoute, Router } from '@angular/router';
import { carService } from 'src/app/service/carService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  id: any;
  car: Car;
  constructor(private router: Router,
    private cs: carService, private ac: ActivatedRoute) { }


  ngOnInit(): void {
    this.ac.params.subscribe(params => {
      this.id = params['id']
    });
    console.log(this.id)
    this.getCarById(this.id)
  }

  getCarById(id) {
    this.cs.getCarById(id).subscribe(
      res => {
        console.log(res);
        this.car = res
      });
  }
  updateCar(){
    this.cs.updateCar(this.car).subscribe(()=>this.router.navigateByUrl("/listCar"));
  }

}
