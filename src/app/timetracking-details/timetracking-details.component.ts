import { Component, OnInit, Input } from '@angular/core';
import { Timetracking } from '../timetracking';
import { ActivatedRoute } from '@angular/router';
import { TimetrackService } from '../timetrack.service';


@Component({
  selector: 'app-timetracking-details',
  templateUrl: './timetracking-details.component.html',
  styleUrls: ['./timetracking-details.component.css']
})
export class TimetrackingDetailsComponent implements OnInit {
  @Input() timetrack: Timetracking;

  exitDetailsView(): void {
    this.timetrack = null;
  }

  constructor(
    private route: ActivatedRoute,
    private timetrackingService: TimetrackService
    // private location: Location
  ) { }

  ngOnInit() {
    this.timetrackingService.getTimetracking();
  }

  getTimetrack(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // +this... => parser som integer
    this.timetrackingService.getTimetrack(id)
    .subscribe(timetrack => this.timetrack = timetrack);
  }

}
