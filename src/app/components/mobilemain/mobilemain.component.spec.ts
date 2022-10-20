import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilemainComponent } from './mobilemain.component';

describe('MobilemainComponent', () => {
  let component: MobilemainComponent;
  let fixture: ComponentFixture<MobilemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilemainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
