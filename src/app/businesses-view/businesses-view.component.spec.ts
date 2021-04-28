import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesViewComponent } from './businesses-view.component';

describe('BusinessesViewComponent', () => {
  let component: BusinessesViewComponent;
  let fixture: ComponentFixture<BusinessesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
