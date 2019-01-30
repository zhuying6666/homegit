import { Injectable } from '@angular/core';
import { HeroData } from '../dependency/heroData';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DependencyServiceService {

  constructor() { }
  
  private heroes: Array<HeroData> = [
    new HeroData(1, 'RubberMan', 'Hero of many talents', '123-456-7899'),
    new HeroData(2, 'Magma', 'Hero of all trades', '555-555-5555'),
    new HeroData(3, 'Mr. Nice', 'The name says it all', '111-222-3333')

 ];

 getHero(id : number) : HeroData{
    return this.heroes.find( (hero) => hero.id === id )
 }
}
