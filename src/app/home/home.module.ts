import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent,
    ],
    imports: [
        HomeRoutingModule,
        SharedModule,
        CommonModule
    ]
})
export class HomeModule {

}