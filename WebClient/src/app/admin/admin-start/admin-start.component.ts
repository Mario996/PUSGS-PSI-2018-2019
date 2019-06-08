import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-start',
  templateUrl: './admin-start.component.html',
  styleUrls: ['./admin-start.component.css']
})
export class AdminStartComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  
  lineAdd(){
    this.router.navigate(['addLine'], {relativeTo: this.route})
  }
  lineEdit(){
    this.router.navigate(['editLine'], {relativeTo: this.route})
  }
  lineDelete(){
    this.router.navigate(['deleteLine'], {relativeTo:this.route})
  }
}