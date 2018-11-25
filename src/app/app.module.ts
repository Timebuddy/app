import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { TimetrackingListComponent } from './timetracking-list/timetracking-list.component';
import { TimetrackingDetailsComponent } from './timetracking-details/timetracking-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        TimetrackingListComponent,
        TimetrackingDetailsComponent,
        MessagesComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    providers: [
        Title
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
