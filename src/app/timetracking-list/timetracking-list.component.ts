import { Component, OnInit } from '@angular/core';
import { Timetracking } from '../timetracking';
import { TimetrackingExampleData } from '../mock-timetracking';
import { TimetrackService } from '../timetrack.service';

@Component({
    selector: 'app-timetracking-list',
    templateUrl: './timetracking-list.component.html',
    styleUrls: ['./timetracking-list.component.css']
})
export class TimetrackingListComponent implements OnInit {

    /*
    timetracking: Timetracking = {
        id: 13,
        note: 'dette er et notat'
    };
    */
    // timetrackinglist = TimetrackingExampleData;
    timetrackinglist: Timetracking[];

    // TODO: onSelect brukes ikke lengre etter vi har lagt til route for "/tidsstempling/{{id}}"
    selectedTimetrack: Timetracking;
    onSelect(timetrack: Timetracking): void {
        this.selectedTimetrack = timetrack;
        // console.log('Triggered onSelect(\'timetrack\')', timetrack);
    }

    /*
    getTimetracking(): void {
        this.timetrackinglist = this.timetrackService.getTimetracking();
    }
    */

    getTimetracking(): void {
        this.timetrackService.getTimetracking()
        .subscribe(timetrackinglist => this.timetrackinglist = timetrackinglist);
    }

    constructor(private timetrackService: TimetrackService) { }

    ngOnInit() {
        this.getTimetracking();
    }

}
