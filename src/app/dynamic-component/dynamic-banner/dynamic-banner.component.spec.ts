import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBannerComponent } from './dynamic-banner.component';

import { Item } from '../ad.item';
import { from } from 'rxjs';
import { Dynamic1Component } from '../dynamic1/dynamic1.component';

describe('DynamicBannerComponent', () => {
  let component: DynamicBannerComponent;
  let fixture: ComponentFixture<DynamicBannerComponent>;
  let component1 : Dynamic1Component;
  //  let ads : Item[] = new Item(component1, {name:'Bombasto', bio: 'Brave as they come'});
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
