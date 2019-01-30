import { Injectable } from '@angular/core';
import { HeroData } from './heroData';
import { DependencyServiceService } from '../dependency/dependency-service.service';
@Injectable({
  providedIn: 'root'
})
export class DependencyCacheService {
  protected hero : HeroData ;

  constructor( public dependencyService : DependencyServiceService) { }
  fetchCachedHero(id: number) {
    if (!this.hero) {
      this.hero = this.dependencyService.getHero(id);
    }
    return this.hero;
  }
}
