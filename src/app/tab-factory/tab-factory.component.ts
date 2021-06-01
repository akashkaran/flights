import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-factory',
  templateUrl: './tab-factory.component.html',
  styleUrls: ['./tab-factory.component.scss']
})
export class TabFactoryComponent implements OnInit {

  constructor() { }
  selection:string;
  ngOnInit(): void {
    this.selection = 'flights';
  }


}
