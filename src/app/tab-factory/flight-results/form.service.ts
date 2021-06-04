import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formData: Form;
  url: string = './../../../assets/data.json'
  constructor(private http: HttpClient) { }

  getFlightResults() {
    return this.http.get(this.url);
  }
}
