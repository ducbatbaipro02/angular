import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'treeview-component',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isHidden = false;
  isHiddenObject = false;
  isHiddenProto = false;
  isHiddenJava = false;
  isHiddenC = false;
  isHiddenCSharp = false;
  isHiddenJS = false;
  isHiddenCoffee = false;
  isHiddenLua = false;
  isHiddens = false;

  Toogle() {
    if(this.isHidden === true){
      this.isHidden = false;
      this.isHiddenObject = false;
      this.isHiddenProto = false;
      this.isHiddenJava = false;
      this.isHiddenC = false;
      this.isHiddenCSharp = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
    else {
      this.isHidden = true;
      this.isHiddenObject = false;
      this.isHiddenProto = false;
      this.isHiddenJava = false;
      this.isHiddenC = false;
      this.isHiddenCSharp = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
  }

  Object() {
    if(this.isHiddenObject === true){
      this.isHiddenObject = false;
      this.isHidden = false;
      this.isHiddenProto = false;
      this.isHiddenJava = false;
      this.isHiddenC = false;
      this.isHiddenCSharp = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
    else {
      this.isHiddenObject = true;
      this.isHidden = false;
      this.isHiddenProto = false;
      this.isHiddenJava = false;
      this.isHiddenC = false;
      this.isHiddenCSharp = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
  }

  Prototype() {
    if(this.isHiddenProto === true){
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHiddenJava = false;
      this.isHiddenC = false;
      this.isHidden = false;
      this.isHiddenCSharp = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
    else {
      this.isHiddenProto = true;
      this.isHiddenObject = false;
      this.isHiddenJava = false;
      this.isHiddenC = false;
      this.isHidden = false;
      this.isHiddenCSharp = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
  }

  Java() {
    if(this.isHiddenJava === true){
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHiddenC = false;
      this.isHidden = false;
      this.isHiddenCSharp = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
    else {
      this.isHiddenJava = true;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHiddenC = false;
      this.isHidden = false;
      this.isHiddenCSharp = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
  }

  C() {
    if(this.isHiddenC === true){
      this.isHiddenC = false;
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHidden = false;
      this.isHiddenCSharp = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
    else {
      this.isHiddenC = true;
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHidden = false;
      this.isHiddenCSharp = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
  }

  CSharp() {
    if(this.isHiddenCSharp === true){
      this.isHiddenCSharp = false;
      this.isHiddenC = false;
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHidden = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
    else {
      this.isHiddenCSharp = true;
      this.isHiddenC = false;
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHidden = false;
      this.isHiddenJS = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
  }

  JavaScript() {
    if(this.isHiddenJS === true){
      this.isHiddenJS = false;
      this.isHiddenCSharp = false;
      this.isHiddenC = false;
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHidden = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
    else {
      this.isHiddenJS = true;
      this.isHiddenCSharp = false;
      this.isHiddenC = false;
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHidden = false;
      this.isHiddenCoffee = false;
      this.isHiddenLua = false;
    }
  }

  Coffee() {
    if(this.isHiddenCoffee === true){
      this.isHiddenCoffee = false;
      this.isHiddenJS = false;
      this.isHiddenCSharp = false;
      this.isHiddenC = false;
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHidden = false;
      this.isHiddenLua = false;
    }
    else {
      this.isHiddenCoffee = true;
      this.isHiddenJS = false;
      this.isHiddenCSharp = false;
      this.isHiddenC = false;
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHidden = false;
      this.isHiddenLua = false;
    }
  }

  Lua() {
    if(this.isHiddenLua === true){
      this.isHiddenLua = false;
      this.isHiddenCoffee = false;
      this.isHiddenJS = false;
      this.isHiddenCSharp = false;
      this.isHiddenC = false;
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHidden = false;
    }
    else {
      this.isHiddenLua = true;
      this.isHiddenCoffee = false;
      this.isHiddenJS = false;
      this.isHiddenCSharp = false;
      this.isHiddenC = false;
      this.isHiddenJava = false;
      this.isHiddenProto = false;
      this.isHiddenObject = false;
      this.isHidden = false;
    }
  }
}
