import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponent } from './dynamic.component';
import { DynamicBannerComponent } from '../dynamic-banner/dynamic-banner.component';
import { Dynamic2Component } from '../../dynamic-component/dynamic2/dynamic2.component';

import { from } from 'rxjs';
import { Item } from '../ad.item';

describe('DynamicComponent', () => { 
  let component: DynamicComponent;
  let fixture: ComponentFixture<DynamicComponent>;

  // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
  // let adItem = this.ads[this.currentAdIndex];
  // let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
  // let viewContainerRef = this.appDynamicDirective.viewContainerRef;
  // viewContainerRef.clear();
  // let componentRef = viewContainerRef.createComponent(componentFactory);
  // const comp = new DynamicBannerComponent(componentRef);
  // const ads: Item[] = [
  //   new Item(Dynamic2Component,   {headline: 'Hiring for several positions',
  //                                     body: 'Submit your resume today!'}),
  //   new Item(Dynamic2Component,   {headline: 'Openings in all departments',
  //                                     body: 'Apply today'}),];
  // comp.ads = Item[
  // new Item(Dynamic2Component,   {headline: 'Hiring for several positions',
  //                                   body: 'Submit your resume today!'}),
  // new Item(Dynamic2Component,   {headline: 'Openings in all departments',
  //                                   body: 'Apply today'}),]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponent ,DynamicBannerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
