import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetrackingListComponent } from './timetracking-list.component';

describe('TimetrackingListComponent', () => {
  let component: TimetrackingListComponent;
  let fixture: ComponentFixture<TimetrackingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetrackingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetrackingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
