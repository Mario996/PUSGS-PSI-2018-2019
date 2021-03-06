import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router"

import { TimeTableComponent } from './time-table/time-table.component';
import { LineNetworkComponent } from './line-network/line-network.component';
import { VehicleLocationComponent } from './vehicle-location/vehicle-location.component';
import { PriceListComponent } from './price-list/price-list.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ControlComponent } from './control/control.component';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VerifyProfileComponent } from './verify-profile/verify-profile.component';

const appRoutes: Routes = [
    { path: '', component: TimeTableComponent},
    { path: 'time-table', component: TimeTableComponent},
    { path: 'line-network', component: LineNetworkComponent},
    { path: 'vehicle-location', component: VehicleLocationComponent},
    { path: 'price-list', component: PriceListComponent},
    { path: 'admin', loadChildren: "./admin/admin.module#AdminModule", canActivate: [AuthGuard]},
    { path: 'control', component: ControlComponent, canActivate: [AuthGuard]},
    { path: 'signup', component: SignupComponent},
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
    { path: 'signin', component: SigninComponent},
    { path: 'verifyprofile/:username', component: VerifyProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules} )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}