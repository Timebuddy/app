import { Component, NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';

// import { NavigationComponent } from './navigation/navigation.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Timebuddy';
    version = environment.version;
    codename = environment.codename;

    public constructor(private titleService: Title) { }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}