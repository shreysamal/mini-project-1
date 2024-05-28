import { Component } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

interface Flight {
  id: number;
  name: string;
  capacity: number;
  from: string;
  destination: string;
  comfort: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HttpClientModule, NgFor, NgIf, ReactiveFormsModule],
  providers: [],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  flights: any;
  private apiUrl = 'http://localhost:5000/api/flights';
  // private apiTest = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  ngOnInit() {
    this.getFlights().subscribe((data) => {
      console.log(data);
      this.flights = data;
    });
  }

  closePopup() {
    this.successMessage = null;
  }

  userName = new FormControl('', Validators.required); // Use Validators.required for non-null values
  userAge = new FormControl(0, Validators.required);
  bookingFlight: Flight | null = null;

  bookFlight(flight: Flight) {
    // Find the selected flight for booking
    this.bookingFlight = flight;
  }
  successMessage: string | null = null;

  submitBooking() {
    // Implement your booking logic here
    if (this.bookingFlight) {
      console.log('Booking submitted for flight:', this.bookingFlight.name);
      console.log('User Name:', this.userName);
      console.log('User Age:', this.userAge);

      console.log('flight details ' + this.bookFlight);

      // Display success message
      this.successMessage = `Booking successful! Details: Flight ${this.bookingFlight.name}, User: ${this.userName.value}, Age: ${this.userAge.value}`;

      // Reset booking details after submission
      this.bookingFlight = null;
      this.userName.setValue('');
      this.userAge.setValue(0);
    }
  }

  title = 'airline-reservation-system';
  // bookFlight(flightId: number) {
  //   // Implement booking logic
  // }

  getFlights() {
    return this.http.get(this.apiUrl).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    const errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    if (error.status === 401) {
      window.location.href = '';
    } else {
      alert(errMsg);
    }
    return errMsg;
  }
}
