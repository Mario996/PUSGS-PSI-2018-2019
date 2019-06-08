import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddLineComponent } from './add-line/add-line.component';
import { AdminStartComponent } from './admin-start/admin-start.component';
import { DeleteLineComponent } from './delete-line/delete-line.component';
import { EditLineComponent } from './edit-line/edit-line.component';

const adminRoutes: Routes = [
    { path: '', component: AdminComponent, children: [
        { path: '', component: AdminStartComponent },
        { path: 'addLine', component: AddLineComponent},
        { path: 'editLine', component: EditLineComponent},
        { path: 'deleteLine', component: DeleteLineComponent}] },
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule{

}