// flight.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'http://localhost:5000/api/flights';

  constructor(private http: HttpClient) {}

  errorMessage = 'you hit an error';

  getFlights() {
    return this.http.get<any[]>(this.apiUrl).pipe(
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
