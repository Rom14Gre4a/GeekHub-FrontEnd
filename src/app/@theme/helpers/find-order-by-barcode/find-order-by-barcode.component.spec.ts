import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOrderByBarcodeComponent } from './find-order-by-barcode.component';

describe('FindOrderByBarcodeComponent', () => {
  let component: FindOrderByBarcodeComponent;
  let fixture: ComponentFixture<FindOrderByBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindOrderByBarcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindOrderByBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
