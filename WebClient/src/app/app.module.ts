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
import { DropdownDirective } from './shared/dropdown.directive';
import { ControlComponent } from './control/control.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { LineService } from './services/line.service';
import { StationService } from './services/station.service';
import { TimetableService } from './services/timetable.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';
import { AddHeaderInterceptor } from './add-header-interceptor';
import { SharedModule } from './shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TicketService } from './services/ticket.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimeTableComponent,
    LineNetworkComponent,
    VehicleLocationComponent,
    PriceListComponent,
    UserProfileComponent,
    SigninComponent,
    SignupComponent,
    ControlComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
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
    AuthService,
    TicketService,
    [{
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
