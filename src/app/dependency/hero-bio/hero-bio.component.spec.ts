import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBioComponent } from './hero-bio.component';
import { DependencyCacheService } from '../dependency-cache.service';
import { HeroBiosComponent } from '../hero-bios/hero-bios.component';
import { HeroData } from '../heroData';

describe('HeroBioComponent', () => {
  let component: HeroBioComponent;
  let fixture: ComponentFixture<HeroBioComponent>;
  let DependencyCacheServiceStub :  jasmine.SpyObj<DependencyCacheService>;
  let hero : HeroData = {id :1 ,name:'marry'};
  let heroId :number =1;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBioComponent ],
      providers:[{provide:DependencyCacheService, useValue: DependencyCacheServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    DependencyCacheServiceStub = TestBed.get(DependencyCacheService);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('getHero should return a HeroData',() =>{
  //   expect(component.hero.id).toBe(hero.id);
  // });
});
