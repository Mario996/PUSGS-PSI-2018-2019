import { Component, OnInit } from '@angular/core';
import { LineToLineMappedSource } from 'webpack-sources';

@Component({
  selector: 'app-delete-line',
  templateUrl: './delete-line.component.html',
  styleUrls: ['./delete-line.component.css']
})
export class DeleteLineComponent implements OnInit {
  lines =[2,3]

  constructor() { }

  ngOnInit() {
  }

  delete(index: number){
    this.lines.splice(index,1);
  }
}
