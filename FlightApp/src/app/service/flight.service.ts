import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  postFlight(flight: Flight):Observable<any> {
    return this.http.post<any>("http://localhost:4040/flight/post",flight);
  }

  filteredFlight(source: string, destination: string, departureDate: string):Observable<Flight[]> {
    return this.http.get<Flight[]>("http://localhost:4040/flight/get/"+source+"/"+destination+"/"+departureDate+"");
  }

  getFlightDetailsById(id: string):Observable<Flight> {
    return this.http.get<Flight>("http://localhost:4040/flight/one/"+id);
  }
}
