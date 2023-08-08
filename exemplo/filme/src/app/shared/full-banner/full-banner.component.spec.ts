import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBannerComponent } from './full-banner.component';

describe('FullBannerComponent', () => {
  let component: FullBannerComponent;
  let fixture: ComponentFixture<FullBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullBannerComponent]
    });
    fixture = TestBed.createComponent(FullBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
