import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponentComponent } from '../app/heroes-component/heroes-component.component';
import { DashboardComponent } from '../app/top-heros/dashboard/dashboard.component';
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';
import { UsersComponent } from '../app/services/users/users.component';
/**
 * 要为哪个组件添加路由就要先import这个组件， 然后在const routes内添加
 * { path : 'router-name', component : component-name}
 */
const routes: Routes = [
  { path : 'users', component : UsersComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path : 'heroes', component : HeroesComponentComponent},
  { path : 'detail/:id',component : HeroDetailComponent},
  { path : '', redirectTo : '/users' ,pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
