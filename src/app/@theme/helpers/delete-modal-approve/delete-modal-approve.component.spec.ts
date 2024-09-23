import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalApproveComponent } from './delete-modal-approve.component';

describe('DeleteModalApproveComponent', () => {
  let component: DeleteModalApproveComponent;
  let fixture: ComponentFixture<DeleteModalApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteModalApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteModalApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
