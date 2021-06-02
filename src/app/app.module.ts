import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TabFactoryComponent } from './tab-factory/tab-factory.component';
import { FlightsComponent } from './tab-factory/flights/flights.component';
import { DummyComponent } from './tab-factory/dummy/dummy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightResultsComponent } from './tab-factory/flight-results/flight-results.component';
import { SortResultsComponent } from './tab-factory/flight-results/sort-results/sort-results.component';
import { FilterResultsComponent } from './tab-factory/flight-results/filter-results/filter-results.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TabFactoryComponent,
    FlightsComponent,
    DummyComponent,
    FlightResultsComponent,
    SortResultsComponent,
    FilterResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
