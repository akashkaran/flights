import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travelers-modal',
  templateUrl: './travelers-modal.component.html',
  styleUrls: ['./travelers-modal.component.scss']
})
export class TravelersModalComponent implements OnInit {
  adults:number =1;
  children:number=1;
  constructor() { }

  ngOnInit(): void {
 
  }

  addOne(params){
    if(params<=10){
      this.adults+=1;
    }
  }
  removeOne(params){
    if(params>=1){
      this.adults-=1;
    }
  }

  addOneChild(params){
    if(params<=10){
      this.children+=1;
    }
  }
  removeOneChild(params){
    if(params>=1){
      this.children-=1;
    }
  }

}
