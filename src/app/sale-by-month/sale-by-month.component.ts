import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sale-by-month',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sale-by-month.component.html',
  styleUrl: './sale-by-month.component.scss'
})

export class SaleByMonthComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line',
      height: 350
    },
    title: {
      text: 'Stock Market Trends Over Time'
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      crosshair: true
    },
    yAxis: {
      title: {
        text: 'Price in $'
      },
      labels: {
        formatter: function() {
          return '$' + this.value;
        }
      }
    },
    series: [
      {
        name: "Apple (AAPL)",
        type: "line",
        color: '#1f78b4',
        data: [
          290, 270, 210, 260, 290, 300, 270, 290, 320, 360, 380, 420
        ]
      },
      {
        name: 'Microsoft (MSFT)',
        type: 'line',
        color: '#33a02c',
        data: [
          250, 260, 290, 260, 300, 340, 360, 400, 340, 350, 370, 370
        ]
      },
      {
        name: 'Google (GOOGL)',
        type: 'line',
        color: '#e31a1c',
        data: [
          370, 390, 420, 390, 370, 395, 410, 420, 450, 410, 320, 290
        ]
      },
    ],
    credits: {
      enabled: false
    },
    tooltip: {
      shared: true,
      valuePrefix: '$',
      formatter: function() {
        let tooltip = '<b>' + this.x + '</b><br/>';
        if (this.points) {
          this.points.forEach(function(point) {
            tooltip += '<span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ': <b>$' + point.y + '</b><br/>';
          });
        }
        return tooltip;
      }
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true
        }
      }
    }
  });
  

  constructor() { }

  ngOnInit(): void {
  }

}
