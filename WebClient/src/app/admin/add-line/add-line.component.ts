import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-line',
  templateUrl: './add-line.component.html',
  styleUrls: ['./add-line.component.css']
})
export class AddLineComponent implements OnInit {

  lines = [2,3];
  recipeForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
