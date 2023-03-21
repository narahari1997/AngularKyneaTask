import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { LogsModule } from '../logs/logs.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DashboardModule,
    LogsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
