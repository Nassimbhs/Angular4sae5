import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Car } from 'src/app/modal/car';
import { carService } from 'src/app/service/carService';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImagenService } from 'src/app/service/imagenService';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent implements OnInit {

  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;

  car : Car = new Car();

  imagen: File;
  imagenMin: File;

  constructor(
    private c:carService,
    private _router:Router,
    private httpClient: HttpClient,
    private imagenService: ImagenService,
    private spinner: NgxSpinnerService) { }


  ngOnInit(): void {

  }

  addCar(){    
    console.log(this.car)
    this.c.addCar(this.car).subscribe(
      (res)=>{
        console.log(res)
        this._router.navigateByUrl("/listCar")
      }
      );
  }
  
  onFileChange(event) {
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  onUpload(): void {
    this.spinner.show();
    this.imagenService.upload(this.imagen).subscribe(
      data => {
        console.log(data)
        this.car.image=data;
        this.addCar();
        this.spinner.hide();
      },
      err => {
        alert(err.error.mensaje);
        this.spinner.hide();
        this.reset();
      }
    );
  }

  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }
}