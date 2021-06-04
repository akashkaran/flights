import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../flight-results/form.service';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { formData} from './search-results.action'
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})

export class FlightsComponent implements OnInit {
  @ViewChild('f') ngForm: NgForm;
  minDate: string;
  sourceList: string[];
  classList: string[];
  searchForm: FormGroup;
  showModal: boolean;
  adults: number = 1;
  children: number = 0;
  datePipe = new DatePipe('en-US');
  constructor(private router: Router,
    // private store: Store<{form:Form}>,
    private formService: FormService,
    private fb: FormBuilder,
    private eRef: ElementRef) {
      // this.count$ = this.store.select(formData.bind);
  }
  

  ngOnInit(): void {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.sourceList = ['(MUM)Mumbai', '(PNQ)Pune', '(GOA)Goa', '(DEL)Delhi'];
    this.classList = ['basic', 'economy', 'main'];
    this.searchForm = this.fb.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      departdate: ['', Validators.required],
      returndate: ['', Validators.required],
      travelers: ['',],
      class: ['', Validators.required],
    })
    if (this.formService.formData) {
       this.searchForm.reset(this.formService.formData);
    }



  }

  gotoResults(params) {
    params.markAllAsTouched();
    if (params.valid) {
      const allData = { ...params.value, travelers: `Adults${this.adults}, Children${this.children}` }
      this.formService.formData = allData;
      // this.store.dispatch(formData({ form:allData }));
      localStorage.setItem('form', JSON.stringify(allData));
      this.router.navigate(['flights']);
    }
  }

  get departure() {
    return this.searchForm.get('departure');
  }
  get destination() {
    return this.searchForm.get('destination');
  }
  get departdate() {
    return this.searchForm.get('departdate');
  }
  get returndate() {
    return this.searchForm.get('returndate');
  }
  get travelers() {
    return this.searchForm.get('travelers');
  }
  get class() {
    return this.searchForm.get('class');
  }


  showingModal() {
    const mod = document.getElementById("trav");
    mod.style.display = "flex";
  }


  addOne(params) {
    if (params <= 10) {
      this.adults += 1;
    }
  }
  removeOne(params) {
    if (params >= 1) {
      this.adults -= 1;
    }
  }

  addOneChild(params) {
    if (params <= 10) {
      this.children += 1;
    }
  }
  removeOneChild(params) {
    if (params >= 1) {
      this.children -= 1;
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      const mod = document.getElementById("trav");
      mod.style.display = "none";
    }
  }




}
