import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { AppRoutingModule } from './app-routing.module';
import { LineNetworkComponent } from './line-network/line-network.component';
import { VehicleLocationComponent } from './vehicle-location/vehicle-location.component';
import { PriceListComponent } from './price-list/price-list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './dropdown.directive';
import { AdminComponent } from './admin/admin.component';
import { ControlComponent } from './control/control.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimeTableComponent,
    LineNetworkComponent,
    VehicleLocationComponent,
    PriceListComponent,
    SigninComponent,
    SignupComponent,
    DropdownDirective,
    AdminComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TimeTableComponent,
    DropdownDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
