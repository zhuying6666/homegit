import { Component, OnInit } from '@angular/core';
// 想要使用hero类先引入
import { Hero } from '../../app/heros';
// import { HEROSMAP }  from "../mockHeros";
import { HeroService } from '../services/hero.service';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-heroes-component',
  templateUrl: './heroes-component.component.html',
  styleUrls: ['./heroes-component.component.css']
})
export class HeroesComponentComponent implements OnInit {

  protected herosList : Hero[];
  protected myHeros : string =" My Heros ";
  constructor(private heroService : HeroService) { }

  ngOnInit() {
    // 在ngOnInit()内做数据的初始化；
    this.getHeros();
  }
  
  /**
   * 通过调用heroService的getHeros得到hero的数据
   */
  getHeros() : void{ 
    this.heroService.getHeros().subscribe(
      (dashHeros) =>  this.herosList = dashHeros 
    );
    console.log(this.herosList);
  }

  /**
   * 通过heroService的addHero函数新添加一个hero
   * @param name 
   */
  addHero( name : string) : void{
    name = name.trim();  //Hero : name id
    if( !name ){
      return;
    }
    this.heroService.addHero({ name } as Hero ).subscribe(
      ( Hero ) => this.herosList.push(Hero)
    );
  }

  /**
   * 通过heroService的delHero函数删除一个hero
   * @param hero 
   */
  delHero(hero : Hero ) : void {
     this.heroService.delHero(hero).subscribe();
     this.herosList = this.herosList.filter(h => h !== hero);

  }
  
}
