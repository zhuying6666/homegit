import { Component, OnInit,Input } from '@angular/core';
import { Hero } from 'src/app/heros';
import { DependencyCacheService } from '../dependency-cache.service';
import { HeroData } from '../heroData';
@Component({
  selector: 'app-hero-bio',
  providers: [DependencyCacheService],
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.css'],
})
export class HeroBioComponent implements OnInit {
  public hero : HeroData ;
  @Input() heroId :number;
  constructor( private cacheService : DependencyCacheService) { }

  ngOnInit() {
    this.hero = this.cacheService.fetchCachedHero(this.heroId);
  }


  

}

