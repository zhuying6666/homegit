import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicBannerComponent } from './dynamic-banner/dynamic-banner.component';
import { Dynamic1Component } from './dynamic1/dynamic1.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';
import { DynamicDirectiveDirective } from './dynamic-directive.directive';

@NgModule({
  declarations: [DynamicComponent, DynamicBannerComponent, Dynamic1Component, Dynamic2Component, DynamicDirectiveDirective,],
  imports: [
    
    CommonModule
  ],
  exports:[DynamicComponent ],
  // 要想确保编译器照常生成工厂类，就要把这些动态加载的组件添加到 NgModule 的 entryComponents 数组中：
  entryComponents: [ Dynamic1Component, Dynamic2Component ],

})
export class DynamicComponentModule { }
