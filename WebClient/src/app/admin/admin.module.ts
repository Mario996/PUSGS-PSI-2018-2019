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
        EditTimetableComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        FormsModule
    ]
})
export class AdminModule {

}