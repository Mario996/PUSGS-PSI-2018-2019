import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Timetable } from 'src/app/model/timetable.model';
import { Station } from 'src/app/model/station.model';
import { StationService } from 'src/app/services/station.service';
import { LineService } from 'src/app/services/line.service';
import { Line } from 'src/app/model/line.model';


@Component({
  selector: 'app-edit-line',
  templateUrl: './edit-line.component.html',
  styleUrls: ['./edit-line.component.css']
})
export class EditLineComponent implements OnInit {

  checkboxStations: Station[];
  lines: Line[];
  lineForm: FormGroup;
  indexLine: number;
  lineId = "Line";

  constructor(private sService: StationService,
    private lService: LineService) { }

  ngOnInit() {
    this.stationsRefresh();
    this.linesRefresh();
    this.initForm();
  }

  private initForm() {
    let lineLineNumber = '';
    let lineStations = new FormArray([]);

    this.lineForm = new FormGroup({
      lineNumber: new FormControl(lineLineNumber, Validators.required),
      stations: lineStations
    });
  }

  onSubmit() {
    if (this.lineForm.valid == true) {
      var line = this.mapLine();
      this.lService.updateLine(line.Id, line).subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  mapLine() {
    let submitStations: Station[] = [];
    let submitTimetables: Timetable[] = [];
    this.lineForm.value.stations.forEach((element, index) => {
      if (element == true) {
        submitStations.push(this.checkboxStations[index]);
      }
    });
    var line = new Line(this.indexLine, this.lineForm.value.lineNumber, submitStations, submitTimetables);

    return line;
  }

  linesRefresh() {
    this.lService.getLines().subscribe(
      (response: Line[]) => {
        this.lines = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  stationsRefresh() {
    this.sService.getStations().subscribe(
      (response: Station[]) => {
        this.checkboxStations = response;
        response.forEach(element => {
          (this.lineForm.controls.stations as FormArray).push(new FormControl(''));
        });

      },
      (error) => {
        console.log(error);
      }
    );
  }
  setIndexLine(n: number) {
    this.indexLine = this.lines[n].Id;
    this.lineForm.controls.lineNumber.setValue(this.lines[n].LineNumber);
    this.lineId = this.lines[n].Id.toString();
  }
}
