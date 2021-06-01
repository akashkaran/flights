import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FlightResultsComponent } from './flight-results.component';

import {HttpClientModule} from '@angular/common/http';
describe('FlightResultsComponent', () => {
  let component: FlightResultsComponent;
  let fixture: ComponentFixture<FlightResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule, HttpClientModule],
      declarations: [ FlightResultsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('back button should be present', () => {
    const btn = fixture.nativeElement.querySelector('.back-button');
    expect(btn.textContent).toBe('arrow_back');

  });

  it('Edit button should be present', () => {
    const btn = fixture.nativeElement.querySelector('.edit-button');
    console.log(btn);
    expect(btn.textContent).toBe('edit');
  });

  it('Sort button should be present', () => {
    const btn = fixture.nativeElement.querySelector('.button1');
    btn.click();
    expect(btn.textContent).toBe('Sort');
  });

  it('convertInSecs should convert time string in seconds', () => {
    let time = component.convertInSecs('01:20am');
    expect(time).toBe(4800);
    time = component.convertInSecs('01:20pm');
    expect(time).toBe(48000);
    time = component.convertInSecs('');
    expect(time).toBe(-1);

  });

  it('filterResults should get called appropriate times', () => {
    spyOn(component, 'filterData')
    component.data = []
    component.filterResults(null);
    expect(component.filterData).toHaveBeenCalledTimes(0);
    let res = component.filterResults('test');
    expect(component.filterData).toHaveBeenCalledTimes(1);
  }); 

  it('sortResults should get called for diffrent values', () => {
    spyOn(component, 'sortBy')
    component.data = []
    const cases=['lowprice', 'highprice', 'airlineasc', 'airlinedesc',
    'departure', 'longduration', 'arrival', ,'shortduration', 'default'];
    for(let cse of cases){
      component.sortResults({sort:cse});
    }
    expect(component.sortBy).toHaveBeenCalledTimes(8);
    
  });

  it('sortBy should get called for diffrent values', () => {
    spyOn(component, 'convertInSecs')
    component.filteredData = [{classData:[{fare:0}]},{classData:[{fare:5}]}]
    component.sortBy('departTime');
    // const cases=['lowprice', 'highprice', 'airlineasc', 'airlinedesc', 'arrival','default'];
    expect(component.convertInSecs).toHaveBeenCalledTimes(2);
    component.sortBy('test');
    component.sortBy('test', false);
    component.sortBy('fare');
    component.sortBy('fare', false);

    
  });




});
