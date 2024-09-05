import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayflightComponent } from './displayflight/displayflight.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { HomeComponent } from './home/home.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "mybookings", component:DisplayflightComponent},
  {path: "bookings", component:BookflightComponent},
  {path: "contactus", component:ContactusComponent},
  {path: "admin-panel", component:AdminMessageComponent},
  {path: "confirmbookings/:bookingId", component:ConfirmBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
