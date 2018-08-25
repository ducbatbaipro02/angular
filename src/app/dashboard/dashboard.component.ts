import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isChange = false;
  Change() {
    if (this.isChange === true) {
      this.isChange = false;
    }
    else {
      this.isChange = true;
    }
  }
}
