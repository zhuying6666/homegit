import { Injectable } from '@angular/core';
import { Item } from '../dynamic-component/ad.item';
import { Dynamic1Component } from '../dynamic-component/dynamic1/dynamic1.component';
import { Dynamic2Component } from '../dynamic-component/dynamic2/dynamic2.component';
@Injectable({
  providedIn: 'root'
})
export class DynamicServiceService {
  getAds() : Item[] {
    return [
      new Item(Dynamic1Component, {name: 'Bombasto', bio: 'Brave as they come'}),

      new Item(Dynamic1Component, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new Item(Dynamic2Component,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new Item(Dynamic2Component,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}
