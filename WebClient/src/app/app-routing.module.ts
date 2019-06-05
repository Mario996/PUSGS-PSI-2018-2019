import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router"

import { TimeTableComponent } from './time-table/time-table.component';
import { LineNetworkComponent } from './line-network/line-network.component';
import { VehicleLocationComponent } from './vehicle-location/vehicle-location.component';
import { PriceListComponent } from './price-list/price-list.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { ControlComponent } from './control/control.component';

const appRoutes: Routes = [
    { path: '', component: TimeTableComponent},
    { path: 'time-table', component: TimeTableComponent},
    { path: 'line-network', component: LineNetworkComponent},
    { path: 'vehicle-location', component: VehicleLocationComponent},
    { path: 'price-list', component: PriceListComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'control', component: ControlComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules} )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}