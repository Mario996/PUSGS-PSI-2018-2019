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
  stationAdd(){
    this.router.navigate(['addStation'], {relativeTo: this.route})
  }
  stationEdit(){
    this.router.navigate(['editStation'], {relativeTo: this.route})
  }
  stationDelete(){
    this.router.navigate(['deleteStation'], {relativeTo:this.route})
  }
  timetableAdd(){
    this.router.navigate(['addTimetable'], {relativeTo: this.route})
  }
  timetableEdit(){
    this.router.navigate(['editTimetable'], {relativeTo: this.route})
  }
  timetableDelete(){
    this.router.navigate(['deleteTimetable'], {relativeTo:this.route})
  }
  priceListAdd(){
    this.router.navigate(['addPriceList'], {relativeTo: this.route})
  }
  priceListEdit(){
    this.router.navigate(['editPriceList'], {relativeTo: this.route})
  }
  priceListDelete(){
    this.router.navigate(['deletePriceList'], {relativeTo:this.route})
  }
  
}
