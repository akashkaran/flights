import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-results',
  templateUrl: './sort-results.component.html',
  styleUrls: ['./sort-results.component.scss']
})
export class SortResultsComponent implements OnInit {

  constructor() { }
  @Output() showSortEmitter = new EventEmitter<any>();

  ngOnInit(): void {
  }

  sortData(params) {
    console.log(params);
    
    this.showSortEmitter.emit(params)
  }

  

}
