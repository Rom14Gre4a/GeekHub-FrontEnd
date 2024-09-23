import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTagByOrderComponent } from './change-tag-by-order.component';

describe('ChangeTagByOrderComponent', () => {
  let component: ChangeTagByOrderComponent;
  let fixture: ComponentFixture<ChangeTagByOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTagByOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTagByOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
