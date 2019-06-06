import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AddLineComponent } from './add-line/add-line.component';
import { AdminComponent } from './admin.component';
import { AdminStartComponent } from './admin-start/admin-start.component';
import { DeleteLineComponent } from './delete-line/delete-line.component';


@NgModule({
    declarations: [
        AddLineComponent,
        AdminComponent,
        AdminStartComponent,
        DeleteLineComponent
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