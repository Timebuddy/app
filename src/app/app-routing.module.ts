import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimetrackingListComponent } from './timetracking-list/timetracking-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimetrackingDetailsComponent } from './timetracking-details/timetracking-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/oversikt', pathMatch: 'full' },
  { path: 'oversikt', component: DashboardComponent },
  { path: 'tidsstempling', component: TimetrackingListComponent },
  { path: 'tidsstempling/:id', component: TimetrackingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
