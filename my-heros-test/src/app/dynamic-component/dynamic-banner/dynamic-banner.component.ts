import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Item } from '../ad.item';
import{ DynamicDirectiveDirective } from '../dynamic-directive.directive';
import { DynamicInterface } from '../dynamic-interface';
@Component({
  selector: 'app-dynamic-banner',
  templateUrl: './dynamic-banner.component.html',
  styleUrls: ['./dynamic-banner.component.css']
})
export class DynamicBannerComponent implements OnInit {
 
  @Input() ads : Item[];
  @ViewChild(DynamicDirectiveDirective) appDynamicDirective : DynamicDirectiveDirective;
  interval : any;
  currentAdIndex = -1;
  constructor(public componentFactoryResolver: ComponentFactoryResolver) { }

   ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    // console.log(this.ads);
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.appDynamicDirective.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicInterface>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

} 
