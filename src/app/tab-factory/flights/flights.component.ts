import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild ('f') ngForm: NgForm;
  minDate:string;
  sourceList:string[];
  classList:string[];
  departure:any;
  destination:any;
  departdate:any;
  returndate:any;
  travelers:any;
  class:any;
  mainForm:FormGroup;
  showModal:boolean;
  datePipe = new DatePipe('en-US');
  constructor(private router: Router,
    private formService: FormService) { 
      
    }

  ngOnInit(): void {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.minDate);
    
    this.sourceList = ['Mumbai', 'Goa', 'Delhi'];
    this.classList = ['basic', 'economy', 'main'];
    console.log(this.formService.formData);
    
    if(this.formService.formData){
      this.departure = this.formService.formData.departure;
      this.destination = this.formService.formData.destination;
      this.departdate = this.formService.formData.departdate;
      this.returndate = this.formService.formData.returndate;
      this.travelers = this.formService.formData.travelers;
      this.class = this.formService.formData.class;
    }
   
    
    
  }

  gotoResults(params) {
    console.log('here');
    
    console.log(params);
    params.form?.markAllAsTouched();
    if(params.valid){
    this.formService.formData=params.value;
    console.log(JSON.stringify(params.value));
    
    localStorage.setItem('form', JSON.stringify(params.value));
console.log(JSON.stringify(localStorage.getItem('form')));

    this.router.navigate(['flights']);
    }
  }


  showingModal(){
    const mod = document.getElementById("trav");
    mod.style.display = "block";
  }


}
