import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStageModalComponent } from './new-stage-modal.component';

describe('NewStageModalComponent', () => {
  let component: NewStageModalComponent;
  let fixture: ComponentFixture<NewStageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
