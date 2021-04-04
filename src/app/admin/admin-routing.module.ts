import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
    {
        path: 'create',
        component: ProductFormComponent,
    }, 
    {
        path: 'products',
        component: ProductListComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {

}