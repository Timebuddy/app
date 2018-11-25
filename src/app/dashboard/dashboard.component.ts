import { Component, OnInit } from '@angular/core';
import { Timetracking } from '../timetracking';
import { TimetrackService } from '../timetrack.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  timetrackinglist: Timetracking[] = [];

  constructor(private timetrackingService: TimetrackService) { }

  ngOnInit() {
    this.getTimetracking();
  }

  getTimetracking(): void {
    this.timetrackingService.getTimetracking()
    .subscribe(timetrackinglist => this.timetrackinglist = timetrackinglist.slice(1,5));
  }

}
