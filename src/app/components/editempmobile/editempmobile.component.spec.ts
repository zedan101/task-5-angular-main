import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditempmobileComponent } from './editempmobile.component';

describe('EditempmobileComponent', () => {
  let component: EditempmobileComponent;
  let fixture: ComponentFixture<EditempmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditempmobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditempmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
