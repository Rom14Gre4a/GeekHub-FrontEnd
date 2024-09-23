import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSumbitOrderModalComponent } from './order-sumbit-order-modal.component';

describe('OrderSumbitOrderModalComponent', () => {
  let component: OrderSumbitOrderModalComponent;
  let fixture: ComponentFixture<OrderSumbitOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSumbitOrderModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSumbitOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
