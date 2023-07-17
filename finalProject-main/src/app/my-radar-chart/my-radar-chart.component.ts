import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent {
  constructor(private apiService : ApiserviceService) {
  }

  public rowData: any;
  public salesData: ChartData<'bar'> | undefined;
  public groupByCategory: any;

  ngOnInit() {
    this.apiService.getData().subscribe(data => {
      this.rowData = data.products;
      this.groupByCategory = this.rowData.reduce((group: { [x: string]: any[]; }, product: { category: any; }) => {
        const { category } = product;
        group[category] = group[category] ?? [];
        group[category].push(product);
        return group;
      }, {});

      let keyValues = Object.keys(this.groupByCategory);
      let dataSetValues = [];
      for (let i=0; i<keyValues.length; i++) {
        dataSetValues.push(this.findData(keyValues[i]));
      }

      this.salesData =  {
        labels: keyValues,
        datasets: [{
          label: "Avg Discount Percentage",
          data: dataSetValues
        }]
      };

    })
  }

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Data',
      },
    },
  };

  findData(key: string): any {
    let dataValue: number = 0;
    this.groupByCategory[key].forEach((element: { discountPercentage: number; }) => {
      dataValue += element.discountPercentage;
    });
    dataValue = dataValue/this.groupByCategory[key].length;
    return Math.floor(dataValue);
  }
}