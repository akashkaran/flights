import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from './form.service';
@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.scss']
})
export class FlightResultsComponent implements OnInit {
  data: any;
  filteredData: any;
  showSort: boolean;
  showFilter: boolean;
  hideResults: boolean;
  constructor(private router: Router,
    private formService: FormService) { }

  ngOnInit(): void {
    this.hideResults = true;
    this.showFilter = false;
    this.showSort = false;
    this.formService.getFlightResults().subscribe(res => {
      this.hideResults = false;
      this.data = res['response']?.flights;
      this.filteredData = [...this.data];
      if (!this.formService.formData) {
        this.formService.formData = JSON.parse(localStorage.getItem('form'));
      }
    }, 
    err =>{
      console.error(err)
    }
    );
  }

  sortBy(param1, params2 = true) {
    this.filteredData = this.filteredData.sort((a, b) => {
      if (param1 === 'departTime' || param1 === 'landingTime') {
        return (this.convertInSecs(a[param1]) < this.convertInSecs(b[param1])) ? -1 : 1;
      } else if (param1 === 'fare') {
        if (params2) {
          return (a.classData[0].fare < b.classData[0].fare) ? -1 : 1;
        } else {
          return (a.classData[0].fare < b.classData[0].fare) ? 1 : -1;
        }
      }
      else if (params2) {
        return (a[param1] < b[param1]) ? -1 : 1;
      }
      else {
        return (a[param1] < b[param1]) ? 1 : -1;
      }
    });
  }

  sortResults(event) {
    this.showSort = !this.showSort;
    switch (event.sort) {
      case 'lowprice': {
        this.sortBy('fare');
        break;
      }
      case 'highprice': {
        this.sortBy('fare', false);
        break;
      }
      case 'airlineasc': {
        this.sortBy('airline');
        break;
      }
      case 'airlinedesc': {
        this.sortBy('airline', false);
        break;
      }
      case 'shortduration': {
        this.sortBy('totalTime');
        break;
      }
      case 'longduration': {
        this.sortBy('totalTime', false);
        break;
      }
      case 'departure': {
        this.sortBy('departTime');
        break;
      }
      case 'arrival': {
        this.sortBy('landingTime');
        break;
      }
      default: {
        console.log('nada');
      }
    }

  }

  showSortMenu() {
    this.showSort = true;
  }


  filterResults(value) {
    this.showFilter = !this.showFilter;
    if (value) {
      this.filterData(value);
    } else {
      this.filteredData = [...this.data];
    }

  }

  convertInSecs(time) {
    if (time) {
      let curTime = time.split(':');
      var totalSeconds = (curTime[0]) * 60 * 60 + (curTime[1].slice(0, 2)) * 60 + (curTime[1].slice(2, 4).toLowerCase() == 'pm' ? 43200 : 0);
      return Number(totalSeconds);
    } else
      return -1;
  }

  navigateBack() {
    if (this.showSort || this.showFilter) {
      this.showSort = false;
      this.showFilter = false;
    } else {
      this.router.navigate([''])
    }

  }

  filterData(params) {
    this.filteredData = this.filteredData.filter(data => (data.classData[0].fare >= params.min && data.classData[0].fare <= params.max));
  }

}
