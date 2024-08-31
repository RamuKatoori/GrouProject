import { Component, OnInit } from '@angular/core';
import { FlightDetails } from 'src/Models/flightdetails';
import { FlightService } from 'src/Services/flight.service';

@Component({
  selector: 'app-displayflight',
  templateUrl: './displayflight.component.html',
  styleUrls: ['./displayflight.component.css']
})
export class DisplayflightComponent implements OnInit {

  constructor(private flight:FlightService) { }

  fd: FlightDetails[] = [];

  // populateFlight() {
  //   this.fd = [{ flightFrom: "Mumbai", flightTo: "Hyd", departure: new Date("10/04/2022"), return: new Date("10/04/2022"), traveller: 1, flightclass: "econmy" },
  //     { flightFrom: "Mumbai", flightTo: "Hyd", departure: new Date("10/04/2022"), return: new Date("10/04/2022"), traveller: 1, flightclass: "econmy" }
  //   ]
  // }

  ngOnInit(): void {
    
    this.fd = this.flight.getAll();
  }

}
