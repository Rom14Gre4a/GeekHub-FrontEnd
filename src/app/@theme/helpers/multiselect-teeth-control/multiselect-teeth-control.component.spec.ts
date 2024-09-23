import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectTeethControlComponent } from './multiselect-teeth-control.component';

describe('MultiselectTeethControlComponent', () => {
  let component: MultiselectTeethControlComponent;
  let fixture: ComponentFixture<MultiselectTeethControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectTeethControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiselectTeethControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
