import { Component, OnInit } from '@angular/core';
import { AvailableFlightsService } from 'src/AvailableFlights/available-flights.service';
import { FlightsAvailable } from 'src/Models/availableFlights';
import { FlightDetails } from 'src/Models/flightdetails';
import { FlightService } from 'src/Services/flight.service';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

  flightsAvail: FlightsAvailable[] =[];
  Cfrom="";
  Cto="";
  fd: FlightDetails = { flightFrom: "", flightTo: "", departure: new Date(), return: new Date(), traveller: 0, flightclass: "" };
  constructor(private flights: FlightService, private flightsNow: AvailableFlightsService) { }

  book() {
    this.flights.AddFlight(this.fd);
    console.log("flight added");
  }
  ngOnInit(): void {
    this.getAllFlights();
    console.log("inside igonit")
  }

  getAllFlights():void {
    this.flightsNow.getAllAvailableFlights().subscribe(data => {
      this.flightsAvail=data;
      console.log(this.flightsAvail);
      console.log("ended");
    })

  }

}
