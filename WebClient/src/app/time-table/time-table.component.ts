import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../services/timetable.service';
import { LineService } from '../services/line.service';
import { Line } from '../model/line.model';
import { Timetable } from '../model/timetable.model';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})

export class TimeTableComponent implements OnInit {
  index : number;
  lineId: number;
  lineNumber = "Lines";
  lineNumber2 = "";
  day = "Weekday";
  cori: number;
  istina: boolean;
  departures = 
  [
  ]
  lines : Line[];
  timetables : Timetable[];
  constructor(private timetableService: TimetableService,
              private lineService: LineService) { }

  ngOnInit() {
    this.linesRefresh();
    this.timetablesRefresh();
  }

  
  getTimetable(){
    this.timetables.forEach(element => {
      if(element.LineId == this.lineId 
        && element.CityOrIntercity == this.cori
        && element.DayOfTheWeek == this.day){
         this.departures = element.Departures.split(',');
         this.istina = true;
        }
    });
    if(this.istina == false){
      this.departures = [];
    }
    this.departures.forEach(element => {
      element.trim();
      if(element == ""){
        var i = this.departures.indexOf(element)
        this.departures.splice(i, 1);
      }
    });
    this.istina = false;
  }

  changeDay(s: any){
    this.day = s;
    this.getTimetable();
  }
  setIndex(n: number){
    this.lineId = this.lines[n].Id;
    this.lineNumber = this.lines[n].LineNumber.toString();
    this.lineNumber2 = this.lines[n].LineNumber.toString();
    this.getTimetable();
  }
  linesRefresh() {
    this.lineService.getLines().subscribe(
      (response: Line[]) => {
        this.lines = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  timetablesRefresh() {
    this.timetableService.getTimetables().subscribe(
      (response: Timetable[]) => {
        this.timetables = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
 
  setCorI(s: number){
    this.cori = s;
    this.getTimetable();
  }
}
