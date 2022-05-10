import { carService } from 'src/app/service/carService';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/modal/car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id : number;
  car : Car;
  constructor(private route: ActivatedRoute, private carService: carService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.car = new Car();
    this.carService.getCarById(this.id).subscribe( data => {
      this.car = data;
    });
    
  }

}
