import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-results',
  templateUrl: './filter-results.component.html',
  styleUrls: ['./filter-results.component.scss']
})
export class FilterResultsComponent implements OnInit {

  constructor() { }
  min: number = 0;
  max: number = 99999;
  @Output() showFilterEmitter = new EventEmitter<any>();

  ngOnInit(): void {
  }

  filterData(params) {
    this.showFilterEmitter.emit(params)
  }

  filterResults(params) {
    this.showFilterEmitter.emit(params);
  }

  resetAll() {
    this.min = 0;
    this.max = 99999;
    this.showFilterEmitter.emit('');
  }



}
