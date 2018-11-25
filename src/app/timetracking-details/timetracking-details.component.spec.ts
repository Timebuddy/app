import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetrackingDetailsComponent } from './timetracking-details.component';

describe('TimetrackingDetailsComponent', () => {
  let component: TimetrackingDetailsComponent;
  let fixture: ComponentFixture<TimetrackingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetrackingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetrackingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
