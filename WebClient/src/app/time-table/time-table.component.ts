import { Component, OnInit, Injectable } from '@angular/core';
import { TimetableService } from './time-table.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})

export class TimeTableComponent implements OnInit {
  broj = 7;
  departures = 
  [
    '8:00',
    '9:00'
  ]
  lines = [];

  constructor(private timetableService: TimetableService) { }

  ngOnInit() {
  }

  changeDD(s: any){
    console.log(s);
  }

  change(){
    this.departures = ['11:00', '10:00'];
    this.timetableService.PostProduct().subscribe(data => {console.log("asfsa")});
  }
}
