import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        ProductFormComponent, 
    ],
    imports: [
        AdminRoutingModule,
        SharedModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
    ]
})
export class AdminModule {

}