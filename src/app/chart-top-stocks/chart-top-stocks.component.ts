import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-chart-top-stocks',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart-top-stocks.component.html',
  styleUrl: './chart-top-stocks.component.scss'
})
export class ChartTopStocksComponent {

  chart = new Chart({
    chart: {
      type: 'column',
      height: 350
    },
    title: {
      text: 'Top 5 Stock Performance'
    },
    xAxis: {
      categories: [
        'AAPL',
        'MSFT',
        'AMZN',
        'GOOGL',
        'META'
      ],
      title: {
        text: 'Stocks'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Performance (%)'
      },
      labels: {
        formatter: function() {
          return this.value + '%';
        }
      }
    },
    series: [
      {
        name: 'Performance',
        type: 'column',
        data: [
          {
            name: 'Apple (AAPL)',
            y: 20,
            color: '#1f77b4'
          },
          {
            name: 'Microsoft (MSFT)',
            y: 25,
            color: '#ff7f0e'
          },
          {
            name: 'Amazon (AMZN)',
            y: 15,
            color: '#2ca02c'
          },
          {
            name: 'Google (GOOGL)',
            y: 30,
            color: '#d62728'
          },
          {
            name: 'Facebook (META)',
            y: 10,
            color: '#9467bd'
          }
        ]
      }
    ],
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                   '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
          color: '#000000'
        }
      }
    },
    credits: {
      enabled: false
    }
  });

}
