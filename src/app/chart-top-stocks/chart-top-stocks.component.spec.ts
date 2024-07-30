import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTopStocksComponent } from './chart-top-stocks.component';

describe('ChartTopStocksComponent', () => {
  let component: ChartTopStocksComponent;
  let fixture: ComponentFixture<ChartTopStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartTopStocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartTopStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
