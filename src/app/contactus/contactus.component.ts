import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/contactusService/contactus.service';
import { Contactus } from 'src/Models/contactus';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  
  constructor(private contactservices:ContactusService) { }
  cont : Contactus = {fullName:"", email:"", contact:0, message:""}
  Message(){
    console.log("start")
    this.contactservices.AddContact(this.cont);
    console.log("end")
  }


  ngOnInit(): void {

  }

}
