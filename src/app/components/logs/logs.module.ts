import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogsComponent
  ],
  imports: [
    CommonModule,
    LogsRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    LogsComponent
  ]
})
export class LogsModule { }
