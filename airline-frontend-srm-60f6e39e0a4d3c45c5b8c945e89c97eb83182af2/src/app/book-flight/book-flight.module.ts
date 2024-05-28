import { RouterModule } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { BookFlightComponent } from './book-flight.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BookFlightComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule],
  providers: [FlightService],
})
export class BookFlightModule {}
