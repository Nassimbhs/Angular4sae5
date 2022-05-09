import { Component, OnInit } from '@angular/core';
import { Chart, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, registerables } from 'chart.js';
import { carService } from 'src/app/service/carService';
import { travelService } from 'src/app/service/travelService';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  constructor(private _service: travelService) {
    Chart.register(BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
    Chart.register(...registerables);

  }

  title : "charDemo";
  listTravel: any[];
  listTravelNumber: any[];

  ngOnInit(): void {

    this._service.getTravelByMissiontype().subscribe(res => {
      this.listTravel = res;
      console.log(this.listTravel);

      
    this._service.getTravelByNumber().subscribe(res1 => {
      this.listTravelNumber = res1;
      
      const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels:  this.listTravel,
          datasets: [{
              label: '# TRAVELS NUMBER',
              data: this.listTravelNumber,
              
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
