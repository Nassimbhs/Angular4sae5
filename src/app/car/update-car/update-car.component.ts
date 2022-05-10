import { Car } from 'src/app/modal/car';
import { ActivatedRoute, Router } from '@angular/router';
import { carService } from 'src/app/service/carService';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImagenService } from 'src/app/service/imagenService';


@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;

  id: any;
  car: Car;
  imagen: File;
  imagenMin: File;
  constructor(private router: Router,
    private cs: carService,
    private ac: ActivatedRoute,
    private imagenService: ImagenService,
    private spinner: NgxSpinnerService) { }


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
    console.log("update : "+ this.car)
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
        this.updateCar();
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
