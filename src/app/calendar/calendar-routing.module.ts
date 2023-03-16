import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { CalendarComponent } from './calendar.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { ViewAllEventComponent } from './view-all-event/view-all-event.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'view-event', component: ViewEventComponent },
  { path: 'view-all-event', component: ViewAllEventComponent },
  { path: 'update-event', component: UpdateEventComponent },
  { path: 'delete-event', component: DeleteEventComponent },
  { path: 'profile', component: ProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
