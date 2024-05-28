// book-flight.component.ts

import { Component } from '@angular/core';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
})
export class BookFlightComponent {
  constructor(private flightService: FlightService) {}

  bookFlight(flightId: number) {
    // Implement booking logic
  }
}
