import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { DisplayflightComponent } from './displayflight/displayflight.component';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { HomeComponent } from './home/home.component';
import {Fcity,Dcity} from './filter';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookflightComponent,
    DisplayflightComponent,
    ContactusComponent,
    AdminMessageComponent,
    HomeComponent,
    Fcity,
    Dcity,
    ConfirmBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
