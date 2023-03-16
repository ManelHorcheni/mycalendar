import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { ViewAllEventComponent } from './view-all-event/view-all-event.component';
import { ProfileComponent } from './profile/profile.component';
import { FullCalendarModule } from '@fullcalendar/angular'


@NgModule({
  declarations: [
    CalendarComponent,
    DeleteEventComponent,
    UpdateEventComponent,
    AddEventComponent,
    ViewEventComponent,
    ViewAllEventComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FullCalendarModule
  ]
})
export class CalendarModule { }
