import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/contactusService/contactus.service';
import { Contactus } from 'src/Models/contactus';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent implements OnInit {

  constructor(private contactservices:ContactusService) { }

  contact : Contactus [] = [];

  ngOnInit(): void {
    this.getMessages();
  }
  getMessages():void{
    this.contactservices.getAllMessages().subscribe(data =>{
      this.contact=data;
      console.log("fetched data form db");
    })
  }

}
