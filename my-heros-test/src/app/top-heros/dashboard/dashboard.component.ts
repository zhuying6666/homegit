import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../heros';
import { HeroSearchComponent } from '../../search/hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  protected dashHeros : Hero[] = [];
  constructor( private dashHero : HeroService) { }

  ngOnInit() {
    this.getHeros();
  }
  /**
   * 获取top hero 前四位
   */
  getHeros () : void {
     this.dashHero.getHeros().subscribe( (dashHeros) => this.dashHeros = dashHeros.slice(1,5)); 
   
  }
  
}
