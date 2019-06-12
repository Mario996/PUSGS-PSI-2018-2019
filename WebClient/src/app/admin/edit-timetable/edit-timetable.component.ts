import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Timetable } from 'src/app/model/timetable.model';
import { TimetableService } from 'src/app/services/timetable.service';
import { LineService } from 'src/app/services/line.service';
import { Line } from 'src/app/model/line.model';


@Component({
  selector: 'app-edit-timetable',
  templateUrl: './edit-timetable.component.html',
  styleUrls: ['./edit-timetable.component.css']
})
export class EditTimetableComponent implements OnInit {

  checkboxLines: Line[];
  timetables: Timetable[];
  lineNumber = "Lines";
  timetableForm: FormGroup;
  line: Line;
  index: number;

  constructor(private ttService: TimetableService,
    private lService: LineService) { }

  ngOnInit() {
    this.timetablesRefresh();
    this.linesRefresh();
    this.initForm();
  }

  private initForm() {
    let timetableId = '';
    let timetableCityOrIntercity = '';
    let timetableDayOfTheWeek = '';
    let timetableDepartures = '';
    let timetableLines = new FormArray([]);

    this.timetableForm = new FormGroup({
      id: new FormControl(timetableId, Validators.required),
      cityOrIntercity: new FormControl(timetableCityOrIntercity, Validators.required),
      day: new FormControl(timetableDayOfTheWeek, Validators.required),
      departures: new FormControl(timetableDepartures, [Validators.required, Validators.pattern(/^((0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]+)(,|\s+|(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]+)*$/)]),
      lines: timetableLines
    });
  }

  onSubmit() {
    if(this.timetableForm.valid == true){
    var timetable = this.mapTimetable();
    this.ttService.editTimetable(timetable.Id,timetable).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error);
      }
    );
  }}  

  mapTimetable() {
    let submitLine: Line;
        submitLine = this.checkboxLines[this.index];
    var timetable = new Timetable(this.timetableForm.value.id, this.timetableForm.value.cityOrIntercity, this.timetableForm.value.day, submitLine, submitLine.Id, this.timetableForm.value.departures);

    return timetable;
  }

  timetablesRefresh() {
    this.ttService.getTimetables().subscribe(
      (response: Timetable[]) => {
        this.timetables = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  linesRefresh() {
    this.lService.getLines().subscribe(
      (response: Line[]) => {
        this.checkboxLines = response;
        response.forEach(element => {
          (this.timetableForm.controls.lines as FormArray).push(new FormControl(''));
        });

      },
      (error) => {
        console.log(error);
      }
    );
  }

  setIndex(n: number){
    this.index = n;
    this.lineNumber = this.checkboxLines[n].LineNumber.toString();
  }
}
