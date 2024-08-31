import { Component, OnInit } from '@angular/core';
import { FlightDetails } from 'src/Models/flightdetails';
import { FlightService } from 'src/Services/flight.service';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

  
  fd:FlightDetails = {flightFrom:"", flightTo:"", departure: new Date(), return: new Date(), traveller:0, flightclass:""};
  constructor(private flights:FlightService) { }

  book(){
    this.flights.AddFlight(this.fd);
    console.log("flight added");
  }
  ngOnInit(): void {
    
  }

}
