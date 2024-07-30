import { Component } from '@angular/core';
import { TopWidgetsComponent } from "../top-widgets/top-widgets.component";
import { ChartMarketTrendsComponent } from "../chart-market-trends/chart-market-trends.component";
import { ChartTopStocksComponent } from "../chart-top-stocks/chart-top-stocks.component";
import { LastFewTransactionsComponent } from "../last-few-transactions/last-few-transactions.component";
import { StockNewsComponent } from "../stock-news/stock-news.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopWidgetsComponent, ChartMarketTrendsComponent, ChartTopStocksComponent, LastFewTransactionsComponent, StockNewsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
