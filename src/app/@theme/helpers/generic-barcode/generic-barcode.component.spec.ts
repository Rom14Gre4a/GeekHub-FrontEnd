import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBarcodeComponent } from './generic-barcode.component';

describe('GenericBarcodeComponent', () => {
  let component: GenericBarcodeComponent;
  let fixture: ComponentFixture<GenericBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericBarcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
