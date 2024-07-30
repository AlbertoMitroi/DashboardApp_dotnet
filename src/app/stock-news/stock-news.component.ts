import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-stock-news',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './stock-news.component.html',
  styleUrl: './stock-news.component.scss'
})
export class StockNewsComponent {


}
