import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { AdminStartComponent } from './admin-start/admin-start.component';
import { DeleteLineComponent } from './delete-line/delete-line.component';
import { EditLineComponent } from './edit-line/edit-line.component';
import { AddLineComponent } from './add-line/add-line.component';
import { AddStationComponent } from './add-station/add-station.component';
import { EditStationComponent } from './edit-station/edit-station.component';
import { DeleteStationComponent } from './delete-station/delete-station.component';
import { DeleteTimetableComponent } from './delete-timetable/delete-timetable.component';
import { AddTimetableComponent } from './add-timetable/add-timetable.component';
import { EditTimetableComponent } from './edit-timetable/edit-timetable.component';
import { SharedModule } from '../shared/shared.module';
import { AddPriceListComponent } from './add-price-list/add-price-list.component';
import { EditPriceListComponent } from './edit-price-list/edit-price-list.component';
import { DeletePriceListComponent } from './delete-price-list/delete-price-list.component';


@NgModule({
    declarations: [
        AddLineComponent,
        AdminComponent,
        AdminStartComponent,
        DeleteLineComponent,
        EditLineComponent,
        AddStationComponent,
        EditStationComponent,
        DeleteStationComponent,
        DeleteTimetableComponent,
        AddTimetableComponent,
        EditTimetableComponent,
        AddPriceListComponent,
        EditPriceListComponent,
        DeletePriceListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class AdminModule {

}