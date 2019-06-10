import { Component, OnInit } from '@angular/core';

import { StationService } from 'src/app/services/station.service';

import { Station } from 'src/app/model/station.model';

@Component({
  selector: 'app-delete-station',
  templateUrl: './delete-station.component.html',
  styleUrls: ['./delete-station.component.css']
})

export class DeleteStationComponent implements OnInit {
  stations: Station[];

  constructor(private lService: StationService) { }

  ngOnInit() {
    this.stationsRefresh();
  }

  stationsRefresh(){
    this.lService.getStations().subscribe(
      (response: Station[]) => {
        this.stations = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  delete(index: number) {
    var x = this.stations[index].Id;
    this.lService.deleteStation(x).subscribe(
      (response) => {
        console.log('Deleted station with id' + x);
      },
      (error) => {
        console.log(error);
      }
    );
    this.stations.splice(index,1);
  }
}
