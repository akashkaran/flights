import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule, } from '@angular/router/testing';
import { FlightsComponent } from './flights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser';
import { Router, } from '@angular/router';
import { FormService } from './../flight-results/form.service';
import { HttpClientModule } from '@angular/common/http'
describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule,
        ReactiveFormsModule],
      declarations: [FlightsComponent],
      providers: [
        { provide: Router, useValue: router },
      ],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form elements should get rendered', () => {
    const form = fixture.nativeElement.querySelector('.search-fields');
    expect(form).toBeTruthy();

  });

  it('form button should be present', () => {
    const btn = fixture.nativeElement.querySelector('.search-button');
    expect(btn.textContent).toBe('Search flights');

  });

  it('validation message should get shown after clicking on empty form', () => {
    let msg = fixture.nativeElement.querySelector('.error-msg');
    expect(msg).toBeNull();
    const button = fixture.nativeElement.querySelector('#flight-search');
    button.click();
    fixture.detectChanges();
    msg = fixture.nativeElement.querySelector('.error-msg');
    expect(msg).toBeTruthy();
    expect(msg.textContent).toContain('required');
  });

});
