import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayflightComponent } from './displayflight/displayflight.component';

const routes: Routes = [
  {path: "Home", component:NavbarComponent},
  {path: "mybookings", component:DisplayflightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
