import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { TimetrackingComponent } from './timetracking/timetracking.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        TimetrackingComponent
    ],
    imports: [
        BrowserModule,
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
