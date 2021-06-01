import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-results',
  templateUrl: './filter-results.component.html',
  styleUrls: ['./filter-results.component.scss']
})
export class FilterResultsComponent implements OnInit {

  constructor() { }
  min:number=0;
  max:number=99999;
  @Output() showFilterEmitter = new EventEmitter<any>();

  ngOnInit(): void {
  }

  filterData(params) {
    console.log(params);
    
    this.showFilterEmitter.emit(params)
  }

  filterResults(params) {
    console.log(params);
    this.showFilterEmitter.emit(params);
  }

  resetAll() {
    console.log('reset');
    
    this.showFilterEmitter.emit('');
  }

  

}
