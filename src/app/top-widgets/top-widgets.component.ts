import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faChartPie,
  faExchangeAlt,
  faWallet,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss'
})
export class TopWidgetsComponent {
  faMarkets = faChartLine;
  faPortofolio = faWallet;
  faTransactions = faExchangeAlt;
  faStatistics = faChartPie;
}
