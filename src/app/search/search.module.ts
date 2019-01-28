import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from '../search/hero-search/hero-search.component';
// 不同模块使用router 需要引入import {RouterModule} from '@angular/router';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [HeroSearchComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeroSearchComponent]
})
export class SearchModule { }
