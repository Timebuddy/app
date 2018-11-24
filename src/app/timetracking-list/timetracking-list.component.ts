import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetracking-list',
  templateUrl: './timetracking-list.component.html',
  styleUrls: ['./timetracking-list.component.css']
})
export class TimetrackingListComponent implements OnInit {

  projectid = 1;
  ts_start = 23132131;
  ts_end = 0;

  constructor() { }

  ngOnInit() {
  }

}
