import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMarketTrendsComponent } from './chart-market-trends.component';

describe('ChartMarketTrendsComponent', () => {
  let component: ChartMarketTrendsComponent;
  let fixture: ComponentFixture<ChartMarketTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartMarketTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartMarketTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
