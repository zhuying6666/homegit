import { Injectable } from '@angular/core';
// import { HEROSMAP } from '../mockHeros';
import { Hero } from '../heros';
import { Observable , of} from 'rxjs';
import { MessagesService } from './messages.service';
//要想使用http需要引入HttpClient
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroUrl : string  = 'api/dashHeros';


  constructor(private herosMessage : MessagesService, private http : HttpClient ) {

   }

   /**
    * 对messages服务的herosMessage（）方法进行封装
    * @param msg 
    */
  log(msg : string ) :void {
    this.herosMessage.add(msg);
  }
  
  /**
   * 返回所有hero数据
   */
  getHeros () : Observable < Hero[]>{
    return this.http.get< Hero[] >(this.heroUrl).pipe(
      tap(_ => this.log("我是返回所有 heros 的data")),
      catchError(this.handleError('getHeros',[]))
    );

  }

  /**
   * 根据id获取所选中的hero
   * @param id 
   */
  getSelectHero(id : number) : Observable <Hero>{
    const oneHero =`${this.heroUrl}/${id}`;
    return this.http.get< Hero>(oneHero).pipe(
      tap(_ => this.log(`我是id为${id}的英雄的信息`)),
      catchError(this.handleError<Hero>(`getSelectHero id=${id}`))
    );
   
  }

  /**
   * 
   * 错误处理 如果错误返回传的观察者的result 
   * @param data 
   * @param result 
   */
  handleError < T > ( data ='data', result ?: T ){
    return (error :any): Observable < T > =>{
      console.error( error);
      this.log(`${data} is ${error.messages}`);
      return of(result as T);
      
    }
  }

  /**
   * 把修改后的hero保存到heros数组内
   * @param heros 
   */
  updateHero( heros : Hero) : Observable < any >{
    return this.http.put(this.heroUrl,heros,httpOptions).pipe(
      tap(_ => this.log(`save hero id === ${heros.id} `)),
      catchError(this.handleError(`update`)),
   )   
  }

  /**
   * 把新添加的hero放到heros数组内
   * @param hero 
   */
  addHero (hero: Hero): Observable<Hero> {

    return this.http.post<Hero>(this.heroUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`addHero hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /**
   * 删除hero
   * @param hero
   */
  delHero( hero : Hero): Observable<Hero> {
    const delHeroUrl =`${this.heroUrl}/${hero.id}`;
    return this.http.delete(delHeroUrl,httpOptions).pipe(
      tap((hero : Hero) => this.log(`delHero `)),
      catchError(this.handleError<Hero>(`delHero hero id =${hero.id}`))
    );
  }

  /**
   * 获取搜索结果的hero数据
   * @param term 
   */
  getSeachHeros( term : string ) : Observable<Hero[]>{
    if( !term.trim()){
      return of([]);
    }
    const searchUrl = `${this.heroUrl}/?name=${term}`;
    return this.http.get<Hero[]>(searchUrl).pipe(
      tap(_=> this.log(`found heroes matching ${term}`)),
      catchError(this.handleError< Hero[]>('getSeachHeros' ,[]))
      
    )
  } 


}


