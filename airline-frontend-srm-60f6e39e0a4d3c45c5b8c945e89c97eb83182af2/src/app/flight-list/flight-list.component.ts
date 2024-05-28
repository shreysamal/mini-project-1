// flight-list.component.ts

import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent implements OnInit {
  flights: any;
  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.flightService.getFlights().subscribe((data) => {
      this.flights = data;
    });
  }
}
