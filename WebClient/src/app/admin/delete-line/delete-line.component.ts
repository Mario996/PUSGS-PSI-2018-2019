import { Component, OnInit, Injectable } from '@angular/core';

import { LineService } from 'src/app/line.service';

import { Line } from 'src/app/model/line.model';

@Component({
  selector: 'app-delete-line',
  templateUrl: './delete-line.component.html',
  styleUrls: ['./delete-line.component.css']
})

export class DeleteLineComponent implements OnInit {
  lines: Line[];

  constructor(private lService: LineService) { }

  ngOnInit() {
    this.linesRefresh();
  }

  linesRefresh(){
    this.lService.getLines().subscribe(
      (response: Line[]) => {
        this.lines = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  delete(index: number) {
    var x = this.lines[index].Id;
    this.lService.deleteLine(x).subscribe(
      (response) => {
        console.log('Deleted line with id' + x);
      },
      (error) => {
        console.log(error);
      }
    );
    this.lines.splice(index,1);
  }
}
