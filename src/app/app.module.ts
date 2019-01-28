import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 当使用双向数据绑定时需要引入FormsModule,并在@NgModule的装饰器imports内添加FormsModule
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponentComponent } from './heroes-component/heroes-component.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from '../app/top-heros/dashboard/dashboard.component';
// HttpClientModule时需要引入 
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
//引入search模块
import { SearchModule } from '../app/search/search.module'
//引入TopHerosModule模块
import { TopHerosModule} from '../app/top-heros/top-heros.module'
// 引入DynamicComponentModule模块
import { DynamicComponentModule } from '../app/dynamic-component/dynamic-component.module';
//引入模块
import { DependencyModule } from '../app/dependency/dependency.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ TestModule } from '../app/test/test.module';
@NgModule({
  declarations: [//声明组件
    AppComponent, HeroesComponentComponent, HeroDetailComponent, MessagesComponent, DashboardComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    TopHerosModule,
    DynamicComponentModule,
    DependencyModule,
    ReactiveFormsModule,
    TestModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports:[ HeroDetailComponent ],
  providers: [],//声明服务
  bootstrap: [AppComponent]
})
export class AppModule { }
