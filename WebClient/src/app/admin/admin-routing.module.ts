import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminStartComponent } from './admin-start/admin-start.component';
import { DeleteLineComponent } from './delete-line/delete-line.component';
import { EditLineComponent } from './edit-line/edit-line.component';
import { AddLineComponent } from './add-line/add-line.component';
import { AddStationComponent } from './add-station/add-station.component';
import { EditStationComponent } from './edit-station/edit-station.component';
import { DeleteStationComponent } from './delete-station/delete-station.component';
import { AddTimetableComponent } from './add-timetable/add-timetable.component';
import { EditTimetableComponent } from './edit-timetable/edit-timetable.component';
import { DeleteTimetableComponent } from './delete-timetable/delete-timetable.component';

const adminRoutes: Routes = [
    { path: '', component: AdminComponent, children: [
        { path: '', component: AdminStartComponent },
        { path: 'addLine', component: AddLineComponent},
        { path: 'editLine', component: EditLineComponent},
        { path: 'deleteLine', component: DeleteLineComponent},
        { path: 'addStation' , component: AddStationComponent},
        { path: 'editStation', component: EditStationComponent},
        { path: 'deleteStation', component: DeleteStationComponent},
        { path: 'addTimetable', component: AddTimetableComponent},
        { path: 'editTimetable', component: EditTimetableComponent},
        { path: 'deleteTimetable', component: DeleteTimetableComponent},] },
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule{

}