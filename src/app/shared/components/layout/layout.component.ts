import {Component, OnInit} from '@angular/core';
import * as AOS from "aos";


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() {}


  ngOnInit() {
    AOS.init();
  }
}



