import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  isCollapse = false;
  Collapse() {
    if (this.isCollapse === true) {
      this.isCollapse = false;
      this.isCollapseForm = false;
      this.isCollapseUI = false;
      this.isCollapseChart = false;
    }
    else {
      this.isCollapse = true;
      this.isCollapseForm = false;
      this.isCollapseUI = false;
      this.isCollapseChart = false;
    }
  }

  isCollapseChart = false;
  CollapseChart() {
    if (this.isCollapseChart === true) {
      this.isCollapseChart = false;
      this.isCollapseForm = false;
      this.isCollapse = false;
      this.isCollapseUI = false;
      this.isCollapse = false;
    }
    else {
      this.isCollapseChart = true;
      this.isCollapseForm = false;
      this.isCollapse = false;
      this.isCollapseUI = false;
      this.isCollapse = false;
    }
  }

  isCollapseUI = false;
  CollapseUI() {
    if (this.isCollapseUI === true) {
      this.isCollapseUI = false;
      this.isCollapseForm = false;
      this.isCollapse = false;
      this.isCollapse = false;
      this.isCollapseChart = false;
    }
    else {
      this.isCollapseUI = true;
      this.isCollapseForm = false;
      this.isCollapse = false;
      this.isCollapse = false;
      this.isCollapseChart = false;
    }
  }

  isCollapseForm = false;
  CollapseForm() {
    if (this.isCollapseForm === true) {
      this.isCollapseForm = false;
      this.isCollapse = false;
      this.isCollapseUI = false;
      this.isCollapse = false;
      this.isCollapseChart = false;
    }
    else {
      this.isCollapseForm = true;
      this.isCollapse = false;
      this.isCollapseUI = false;
      this.isCollapse = false;
      this.isCollapseChart = false;
    }
  }

  isClick = false;
  Clicked() {
    if (this.isClick === true) {
      this.isClick = false;
      this.isCollapseForm = false;
      this.isCollapse = false;
      this.isCollapseUI = false;
      this.isCollapse = false;
      this.isCollapseChart = false;
    }
    else {
      this.isClick = true;
      this.isCollapseForm = false;
      this.isCollapse = false;
      this.isCollapseUI = false;
      this.isCollapse = false;
      this.isCollapseChart = false;
    }
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

  isLog = false;
  ClickLog() {
    if (this.isLog === true) {
      this.isLog = false;
    }
    else {
      this.isLog = true;
    }
  }
}
