import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { DisplayflightComponent } from './displayflight/displayflight.component';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookflightComponent,
    DisplayflightComponent,
    ContactusComponent,
    AdminMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
