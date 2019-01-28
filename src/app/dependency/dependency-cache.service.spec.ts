import { TestBed } from '@angular/core/testing';
import { HeroData } from './heroData';

import { DependencyCacheService } from './dependency-cache.service';
import {DependencyServiceService } from './dependency-service.service';
describe('DependencyCacheService', () => {
  let com : DependencyCacheService;
  let com1 :  jasmine.SpyObj<DependencyServiceService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('DependencyServiceService', ['getHero']);
    TestBed.configureTestingModule({ providers: [DependencyCacheService, 
      { provide: DependencyServiceService, useValue: spy }
    ] });
    com = TestBed.get(DependencyCacheService);
    com1 = TestBed.get(DependencyServiceService);
  });

  it('should be created', () => {
    const service: DependencyCacheService = TestBed.get(DependencyCacheService);
    expect(service).toBeTruthy();
  });
  it('should return HeroData',() =>{
    let hero : HeroData = {id :1 ,name:'marry'};
    // let com = new DependencyCacheService( new DependencyServiceService());
    com1.getHero.and.returnValue(hero);
    expect(com.fetchCachedHero(1).id).toBe(hero.id);

  });

});
