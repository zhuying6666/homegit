import { Component, OnInit, Input } from '@angular/core';
import { DynamicInterface } from '../dynamic-interface';

@Component({
  selector: 'app-dynamic1',
  templateUrl: './dynamic1.component.html',
  styleUrls: ['./dynamic1.component.css']
})
export class Dynamic1Component implements DynamicInterface {

  @Input() data :any;
  constructor() { }

  ngOnInit() {
  }

}
