import { Component, OnInit } from '@angular/core';

import { TimetableService } from 'src/app/services/timetable.service';

import { Timetable } from 'src/app/model/timetable.model';

@Component({
  selector: 'app-delete-timetable',
  templateUrl: './delete-timetable.component.html',
  styleUrls: ['./delete-timetable.component.css']
})

export class DeleteTimetableComponent implements OnInit {
  timetables: Timetable[];

  constructor(private lService: TimetableService) { }

  ngOnInit() {
    this.timetablesRefresh();
  }

  timetablesRefresh(){
    this.lService.getTimetables().subscribe(
      (response: Timetable[]) => {
        this.timetables = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  delete(index: number) {
    var x = this.timetables[index].Id;
    this.lService.deleteTimetable(x).subscribe(
      (response) => {
        console.log('Deleted timetable with id' + x);
      },
      (error) => {
        console.log(error);
      }
    );
    this.timetables.splice(index,1);
  }
}
