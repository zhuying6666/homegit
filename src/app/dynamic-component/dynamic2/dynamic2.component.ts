import { Component, OnInit, Input } from '@angular/core';
import { DynamicInterface } from '../dynamic-interface';

@Component({
  selector: 'app-dynamic2',
  templateUrl: './dynamic2.component.html',
  styleUrls: ['./dynamic2.component.css']
})
export class Dynamic2Component implements DynamicInterface {

  @Input() data :any;
  constructor() { }

  ngOnInit() {
  }

}
