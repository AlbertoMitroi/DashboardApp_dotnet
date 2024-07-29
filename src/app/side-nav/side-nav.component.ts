import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faChartLine,
  faChartPie,
  faExchangeAlt,
  faNewspaper,
  faQuestionCircle,
  faTachometerAlt,
  faUserCog,
  faWallet,

} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  faDashboard = faTachometerAlt;
  faMarkets = faChartLine;
  faPortofolio = faWallet;
  faAccountSettings = faUserCog;
  faTransactions = faExchangeAlt;
  faStatistics = faChartPie;
  faNewsAnalysis = faNewspaper;
  faHelpSupport = faQuestionCircle;
  
}
