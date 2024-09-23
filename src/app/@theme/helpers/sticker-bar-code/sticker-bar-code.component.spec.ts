import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerBarCodeComponent } from './sticker-bar-code.component';

describe('StickerBarCodeComponent', () => {
  let component: StickerBarCodeComponent;
  let fixture: ComponentFixture<StickerBarCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerBarCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickerBarCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
