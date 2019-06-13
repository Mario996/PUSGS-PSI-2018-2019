import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Station } from 'src/app/model/station.model';
import { StationService } from 'src/app/services/station.service';
import { LineService } from 'src/app/services/line.service';
import { Line } from 'src/app/model/line.model';


@Component({
  selector: 'app-edit-station',
  templateUrl: './edit-station.component.html',
  styleUrls: ['./edit-station.component.css']
})
export class EditStationComponent implements OnInit {

  checkboxLines: Line[];
  stations: Station[];
  stationForm: FormGroup;
  indexStation: number;
  stationId = "Stations";


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
    if (this.stationForm.valid == true) {
      var station = this.mapStation();
      this.sService.updateStation(station.Id, station).subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  mapStation() {
    let submitLines: Line[] = [];
    this.stationForm.value.lines.forEach((element, index) => {
      if (element == true) {
        submitLines.push(this.checkboxLines[index]);
      }
    });
    var station = new Station(this.indexStation, this.stationForm.value.name, this.stationForm.value.address, this.stationForm.value.longitude, this.stationForm.value.latitude, submitLines);

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

  setIndexStation(n: number) {
    this.indexStation = this.stations[n].Id;
    this.stationForm.controls.name.setValue(this.stations[n].Name);
    this.stationForm.controls.address.setValue(this.stations[n].Address);
    this.stationForm.controls.longitude.setValue(this.stations[n].Longitude);
    this.stationForm.controls.latitude.setValue(this.stations[n].Latitude);
    this.stationId = this.stations[n].Id.toString();
  }
}
