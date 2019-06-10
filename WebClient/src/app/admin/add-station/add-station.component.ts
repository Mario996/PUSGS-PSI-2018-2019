import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Station } from 'src/app/model/station.model';
import { StationService } from 'src/app/services/station.service';
import { LineService } from 'src/app/services/line.service';
import { Line } from 'src/app/model/line.model';


@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  checkboxLines: Line[];
  stations: Station[];
  stationForm: FormGroup;


  constructor(private sService: StationService,
    private lService: LineService) { }

  ngOnInit() {
    this.stationsRefresh();
    this.linesRefresh();
    this.initForm();
  }

  private initForm() {
    let stationName = '';
    let stationAdress = '';
    let stationLongitude = '';
    let stationLatitude = '';
    let stationLines = new FormArray([]);

    this.stationForm = new FormGroup({
      name: new FormControl(stationName, Validators.required),
      address: new FormControl(stationAdress, Validators.required),
      longitude: new FormControl(stationLongitude, Validators.required),
      latitude: new FormControl(stationLatitude, Validators.required),
      lines: stationLines
    });
  }

  onSubmit() {
    var station = this.mapStation();
    this.sService.addStation(station).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  mapStation() {
    let submitLines: Line[] = [];
    this.stationForm.value.lines.forEach((element, index) => {
      if (element == true) {
        submitLines.push(this.checkboxLines[index]);
      }
    });
    var station = new Station(null, this.stationForm.value.name, this.stationForm.value.address, this.stationForm.value.longitude, this.stationForm.value.latitude, submitLines);

    return station;
  }

  stationsRefresh() {
    this.sService.getStations().subscribe(
      (response: Station[]) => {
        this.stations = response;
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
          (this.stationForm.controls.lines as FormArray).push(new FormControl(''));
        });

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
