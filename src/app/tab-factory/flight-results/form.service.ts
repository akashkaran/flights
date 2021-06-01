import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formData:any;
  url:string = './../../../assets/data.json'
  constructor(private http: HttpClient) { }

  getFlightResults() {
    return this.http.get(this.url);
  }
}
