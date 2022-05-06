import { carService } from 'src/app/service/carService';
import { Component, OnInit } from '@angular/core';
import { Chart, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, registerables } from 'chart.js';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  constructor(private _service: carService) {
    Chart.register(BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
    Chart.register(...registerables);

  }

  title : "charDemo";
  listCarModel: any[];
  listCarModelNumber: any[];

  ngOnInit(): void {

    this._service.getCarByModel().subscribe(res => {
      this.listCarModel = res;
      console.log(this.listCarModel);

      
    this._service.getCarByModelNumber().subscribe(res1 => {
      this.listCarModelNumber = res1;
      
      const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels:  this.listCarModel,
          datasets: [{
              label: '# CARS NUMBER',
              data: this.listCarModelNumber,
              
              backgroundColor: [
                'rgb(252, 3, 74)',
              ],
             
              borderWidth: 1
              
          }
        ]
      },
      options: {
          scales: {
              y: {
                max : 10,
                min : 0,
                  beginAtZero: true,
              }
          }
      }
  });
});
    })
    

  }

}

