import { Injectable } from '@angular/core';
import { Contactus } from 'src/Models/contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor() { }
  contact:Contactus= {fullName:"", email:"", contact:0, message:""};

  con : Contactus[] = [];

  populateContact():any{
    this.con = [{"fullName":"mayasir", "email":"mayasir@gmail", contact:8687543, "message":"help me"}]
    return this.con;
  }

  AddContact(contact: Contactus){
    console.log("count: " + this.con.length)
    this.con.push(contact);
    console.log("message added");
    console.log("count: " + this.con.length)
  }

  getAllContact(){
    console.log(this.con.length + "ths first length is")
    console.log("enabled the geAll")
    return this.con;
  }

}
