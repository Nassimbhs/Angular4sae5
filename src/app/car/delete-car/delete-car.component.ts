import { Router } from '@angular/router';
import { carService } from 'src/app/service/carService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
