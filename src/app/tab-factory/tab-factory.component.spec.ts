import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFactoryComponent } from './tab-factory.component';

describe('TabFactoryComponent', () => {
  let component: TabFactoryComponent;
  let fixture: ComponentFixture<TabFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabFactoryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('flights tab should be active by default', () => {
    const activetab = fixture.nativeElement.querySelector('.active').textContent;
    expect(activetab).toContain('Flights');
  });

  it('hotels tab should be rendered', () => {
    let tab = fixture.nativeElement.querySelector('#hotels');
    expect(tab.textContent).toContain('Hotels');

    tab.click();
    fixture.detectChanges();
    const activetab = fixture.nativeElement.querySelector('.active');
    expect(activetab.textContent).toContain('Hotels');

    // go back to hotels tab
    tab = fixture.nativeElement.querySelector('#flights');
    tab.click();
    fixture.detectChanges();

  });
});
