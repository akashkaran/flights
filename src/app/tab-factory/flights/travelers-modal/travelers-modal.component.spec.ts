import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelersModalComponent } from './travelers-modal.component';

describe('TravelersModalComponent', () => {
  let component: TravelersModalComponent;
  let fixture: ComponentFixture<TravelersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelersModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
