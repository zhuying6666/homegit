import { Component, OnInit } from '@angular/core';
// 引入Observable Subject debounceTime distinctUntilChanged switchMap
import { Observable, Subject, from } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 import { Hero } from '../../heros';
 import { HeroService } from '../../services/hero.service'
 
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  
  public herosResult$ : Observable< Hero[]>;
  private searchTerms = new Subject<string>();
  protected searchHeroName : string ='';
  constructor( private heroSerive : HeroService) { }
  /**
   * 把搜索内容放到searchTerms内
   * @param term 
   */
  searchHero( term : string ) : void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.herosResult$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term : string ) =>this.heroSerive.getSeachHeros(term) ),
    )
  }
  

}
