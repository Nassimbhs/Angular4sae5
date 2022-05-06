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


  ngOnInit(): void {

    this._service.getCarByModel().subscribe(res => {
      this.listCarModel = res;
      console.log(this.listCarModel);
      const myChart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels:  this.listCarModel,
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
               
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    })
    

  }

}

