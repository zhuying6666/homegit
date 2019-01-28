import { TestBed } from '@angular/core/testing';
import { HeroData } from '../dependency/heroData';
import { DependencyServiceService } from './dependency-service.service';

describe('DependencyServiceService', () => {
  let dependencyService : DependencyServiceService = new DependencyServiceService();
  let heroData : HeroData = {id:1, name:'RubberMan', description:'Hero of many talents',phone:'123-456-7899'};
  beforeEach(
    () => TestBed.configureTestingModule({})
    );

  it('should be created', () => {
    const service: DependencyServiceService = TestBed.get(DependencyServiceService);
    expect(service).toBeTruthy();
  });
  it('#getHero should return a heroData ',()=>{
    expect(dependencyService.getHero(1).id).toBe(heroData.id);
    
  });
});
