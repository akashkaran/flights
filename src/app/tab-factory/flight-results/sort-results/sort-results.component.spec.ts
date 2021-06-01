import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SortResultsComponent } from './sort-results.component';

describe('SortResultsComponent', () => {
  let component: SortResultsComponent;
  let fixture: ComponentFixture<SortResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [FormsModule, ReactiveFormsModule],
      declarations: [ SortResultsComponent, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly @Output value of text input in component', () => {
    spyOn(component.showSortEmitter, 'emit'); 
    const button = fixture.nativeElement.querySelector('button');
    const input = fixture.nativeElement.querySelector('#lowprice').value;
    component.sortData({sort:input});
    //.value = 'lowprice'; 
    // const inputText = fixture.nativeElement.querySelector('#lowprice').value;
    button.click(); 
    fixture.detectChanges();
    expect(component.showSortEmitter.emit).toHaveBeenCalledWith({sort:'lowprice'}); 
  });

  
});
