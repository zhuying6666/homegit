import { Component, OnInit } from '@angular/core';
import { Item } from '../ad.item';
import { DynamicServiceService } from '../dynamic-service.service';
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  protected ads : Item[] = [];
  constructor( public adServe : DynamicServiceService) { }

  ngOnInit() {
     this.getAdItemData();
  }
   
  getAdItemData() {
    this.ads = this.adServe.getAds();
   console.log(this.ads);
  }
}
