import { RouterModule } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { FlightListComponent } from './flight-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FlightListComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule],
  providers: [FlightService],
})
export class FlightListModule {}
