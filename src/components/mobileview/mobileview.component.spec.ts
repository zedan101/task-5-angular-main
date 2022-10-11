import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileviewComponent } from './mobileview.component';

describe('MobileviewComponent', () => {
  let component: MobileviewComponent;
  let fixture: ComponentFixture<MobileviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
