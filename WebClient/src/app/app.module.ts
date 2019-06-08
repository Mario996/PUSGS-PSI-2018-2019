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
import { ControlComponent } from './control/control.component';
import { HttpClientModule }    from '@angular/common/http';
import { LineService } from '../app/services/line.service';
import { StationService } from '../app/services/station.service';
import { TimetableService } from './time-table/time-table.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';

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
  providers: [
    LineService,
    TimetableService,
    StationService,
    LoginService,
    RegisterService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
