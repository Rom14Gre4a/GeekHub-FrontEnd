import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalShadeListComponent } from './modal-shade-list.component';

describe('ModalShadeListComponent', () => {
  let component: ModalShadeListComponent;
  let fixture: ComponentFixture<ModalShadeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalShadeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalShadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
