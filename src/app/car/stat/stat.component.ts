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
                'rgb(252, 1, 101)',
                'rgb(120, 52, 170)',
                'rgb(125, 193, 74)',
                'rgb(10, 4, 74)',
                'rgb(25, 5, 74)',
                'rgb(50, 6, 74)',
                'rgb(60, 7, 74)',
                'rgb(05, 8, 74)',
                'rgb(70, 9, 74)',
                'rgb(90, 10, 74)',
                'rgb(100, 11, 74)',

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

