import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { DummyComponent } from './tab-factory/dummy/dummy.component';
import { FlightResultsComponent } from './tab-factory/flight-results/flight-results.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'flights', component: FlightResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
