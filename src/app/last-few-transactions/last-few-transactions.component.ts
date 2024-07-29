import { Component } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-last-few-transactions',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    CommonModule
  ],
  templateUrl: './last-few-transactions.component.html',
  styleUrl: './last-few-transactions.component.scss'
})
export class LastFewTransactionsComponent {

  transactions = [
    {
      imgSrc: 'fa-apple',
      title: 'Apple Inc. (AAPL)',
      price: 145.30,
      shop: 'NASDAQ',
      location: 'New York, USA',
      status: 'confirmed'
    },
    {
      imgSrc: 'fa-microsoft',
      title: 'Microsoft Corp. (MSFT)',
      price: 299.79,
      shop: 'NASDAQ',
      location: 'New York, USA',
      status: 'pending'
    },
    {
      imgSrc: 'fa-amazon',
      title: 'Amazon.com Inc. (AMZN)',
      price: 3550.55,
      shop: 'NASDAQ',
      location: 'New York, USA',
      status: 'shipped'
    },
    {
      imgSrc: 'fa-google',
      title: 'Alphabet Inc. (GOOGL)',
      price: 2729.89,
      shop: 'NASDAQ',
      location: 'New York, USA',
      status: 'confirmed'
    },
    {
      imgSrc: 'fa-facebook',
      title: 'Meta Platforms Inc. (META)',
      price: 358.22,
      shop: 'NASDAQ',
      location: 'New York, USA',
      status: 'pending'
    },
    {
      imgSrc: 'fa-tesla',
      title: 'Tesla Inc. (TSLA)',
      price: 730.91,
      shop: 'NASDAQ',
      location: 'New York, USA',
      status: 'confirmed'
    },
    {
      imgSrc: 'fa-nvidia',
      title: 'NVIDIA Corporation (NVDA)',
      price: 195.24,
      shop: 'NASDAQ',
      location: 'New York, USA',
      status: 'shipped'
    },
    {
      imgSrc: 'fa-netflix',
      title: 'Netflix Inc. (NFLX)',
      price: 590.65,
      shop: 'NASDAQ',
      location: 'New York, USA',
      status: 'confirmed'
    },
    {
      imgSrc: 'fa-adobe',
      title: 'Adobe Inc. (ADBE)',
      price: 650.89,
      shop: 'NASDAQ',
      location: 'New York, USA',
      status: 'pending'
    },
    {
      imgSrc: 'fa-ibm',
      title: 'Int. Business Machines (IBM)',
      price: 140.70,
      shop: 'NYSE',
      location: 'New York, USA',
      status: 'shipped'
    }
  ];

}
