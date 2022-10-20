import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdatamobComponent } from './editdatamob.component';

describe('EditdatamobComponent', () => {
  let component: EditdatamobComponent;
  let fixture: ComponentFixture<EditdatamobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdatamobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdatamobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
