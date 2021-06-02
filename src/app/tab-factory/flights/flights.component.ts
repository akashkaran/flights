import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../flight-results/form.service';
import { DatePipe } from '@angular/common';

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
  departure: any;
  destination: any;
  departdate: any;
  returndate: any;
  travelers: any;
  class: any;
  mainForm: FormGroup;
  showModal: boolean;
  adults: number = 1;
  children: number = 0;
  datePipe = new DatePipe('en-US');
  constructor(private router: Router,
    private formService: FormService,
    private eRef: ElementRef) {

  }

  ngOnInit(): void {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.sourceList = ['(MUM)Mumbai', '(PNQ)Pune', '(GOA)Goa', '(DEL)Delhi'];
    this.classList = ['basic', 'economy', 'main'];

    if (this.formService.formData) {
      this.departure = this.formService.formData.departure;
      this.destination = this.formService.formData.destination;
      this.departdate = this.formService.formData.departdate;
      this.returndate = this.formService.formData.returndate;
      this.travelers = this.formService.formData.travelers;
      this.class = this.formService.formData.class;
    }



  }

  gotoResults(params) {
    params.form?.markAllAsTouched();
    if (params.valid) {
      const allData = { ...params.value, travelers: `Adults${this.adults}, Children${this.children}` }
      this.formService.formData = allData;
      localStorage.setItem('form', JSON.stringify(allData));
      this.router.navigate(['flights']);
    }
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
