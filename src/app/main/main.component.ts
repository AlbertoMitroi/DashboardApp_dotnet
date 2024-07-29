import { Component } from '@angular/core';
import { TopWidgetsComponent } from "../top-widgets/top-widgets.component";
import { SaleByMonthComponent } from "../sale-by-month/sale-by-month.component";
import { SaleByCategoryComponent } from "../sale-by-category/sale-by-category.component";
import { LastFewTransactionsComponent } from "../last-few-transactions/last-few-transactions.component";
import { TopThreeProductsComponent } from "../top-three-products/top-three-products.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopWidgetsComponent, SaleByMonthComponent, SaleByCategoryComponent, LastFewTransactionsComponent, TopThreeProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
