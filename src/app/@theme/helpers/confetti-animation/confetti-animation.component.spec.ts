import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfettiAnimationComponent } from './confetti-animation.component';

describe('ConfettiAnimationComponent', () => {
  let component: ConfettiAnimationComponent;
  let fixture: ComponentFixture<ConfettiAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfettiAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfettiAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
