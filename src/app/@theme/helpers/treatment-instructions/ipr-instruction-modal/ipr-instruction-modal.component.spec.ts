import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IprInstructionModalComponent } from './ipr-instruction-modal.component';

describe('IprInstructionModalComponent', () => {
  let component: IprInstructionModalComponent;
  let fixture: ComponentFixture<IprInstructionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IprInstructionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IprInstructionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
