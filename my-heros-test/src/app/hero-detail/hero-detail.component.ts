import { Component, OnInit ,Input} from '@angular/core';
import { Hero } from '../heros';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
/**
 * 当想要从router内截取出参数时，需要引入
 * import { Location } from '@angular/common'
 * import { ActivateRoute } from '@angular/router'
 * 并在构造函数内依赖注入 Location ActivateRoute
 */
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  protected hero : Hero = new Hero;
  
  constructor(
    private selectHero : HeroService ,
    private route :  ActivatedRoute,
    private location : Location
    
    ) { }

  ngOnInit() {
    this.getCheckHero();
  }
  
  /**
   * 通过router的参数获取选中的是哪个hero
   */
  getCheckHero() : void{
     const id =+this.route.snapshot.paramMap.get('id');
     this.selectHero.getSelectHero(id).subscribe(dashHeros => this.hero = dashHeros);
   
  }

  /**
   *  go back
   */
  goBack() : void{
      this.location.back(); 
  }
  
  /**
   * 保存修改的hero
   */
  saveHero() :void{
    this.selectHero.updateHero(this.hero).subscribe(
      () =>this.goBack()
    );
  }
}
