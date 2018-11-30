import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Timetracking } from './timetracking';
import { TimetrackingExampleData } from './mock-timetracking';

@Injectable({
  providedIn: 'root'
})
export class TimetrackService {

  /*
  getTimetracking(): Timetracking[] {
    return TimetrackingExampleData;
  }
  */

  constructor(private messageService: MessageService) { }

  getTimetracking(): Observable<Timetracking[]> {
    // TODO: send mld _etter_ data er hentet
    this.messageService.add('TimetrackService: Henter timeliste data...');
    return of(TimetrackingExampleData);
  }

  getTimetrack(id: number): Observable<Timetracking> {
    this.messageService.add(`TimetrackService: Hentet tidsstempling id = ${id}`);
    return of(TimetrackingExampleData.find(timetrack => timetrack.id === id));
  }

}
