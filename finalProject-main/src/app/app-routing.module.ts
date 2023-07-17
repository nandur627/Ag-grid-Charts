import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { NgChartsComponent } from './ng-charts/ng-charts.component';

const routes: Routes = [
  {path: 'ag-grid', component: AgGridComponent},
  {path: 'ng-charts', component: NgChartsComponent,
   children: [
    {path: 'bar-chart', component: MyBarChartComponent},
    {path: 'doughnut-chart', component: MyDoughnutChartComponent},
    {path: 'radar-chart', component: MyRadarChartComponent},
    {path: 'pie-chart', component: MyPieChartComponent},
    {path: '**', component: MyBarChartComponent}
  ]
},
  {path: '**', component: AgGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
