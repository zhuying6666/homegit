import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-dome',
  templateUrl: './dome.component.html',
  styleUrls: ['./dome.component.css'],
})
export class DomeComponent implements OnInit {
  public msg : string = 'the ison is false';
  public ison : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  clicked(){
    this.ison = !this.ison;
    this.msg=`the ison is ${this.ison}` ; 
  }
}
