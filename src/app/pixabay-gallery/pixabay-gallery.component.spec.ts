import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixabayGalleryComponent } from './pixabay-gallery.component';

describe('PixabayGalleryComponent', () => {
  let component: PixabayGalleryComponent;
  let fixture: ComponentFixture<PixabayGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixabayGalleryComponent]
    });
    fixture = TestBed.createComponent(PixabayGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
