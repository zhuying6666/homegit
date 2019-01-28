import { Injectable } from '@angular/core';
import { MsgService } from '../services/msg.service';
import { Observable , of,throwError} from 'rxjs';
//引入http请求
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError,retry, map, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
     private msgService : MsgService,
     public http : HttpClient
    
    ) { }

  /**
   * 统一发送请求
   * @param params 
   * 
   */
  public request(params :any) : Observable < any >{
    const access_token = localStorage.getItem("access_token")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': access_token
      })
    };
    if (params['method'] == 'post' || params['method'] == 'POST') {
      //post请求
      return this.post(params['url'], params['data'], httpOptions);
    } 
    else if(params['method'] == 'get' || params['method'] == 'get'){
      //get请求
      return this.get(params['url'], httpOptions);
    }
    else if(params['method'] == 'delete' || params['method'] == 'delete'){
      //delete请求
      return this.delete(params['url'], httpOptions);
    }
    else if(params['method'] == 'put' || params['method'] == 'put'){
      //delete请求
      return this.put(params['url'], params['data'], httpOptions);
    }
    

  }
  
  /**
   * post()请求
   * @param url 
   * @param data 
   * @param httpOption 
   */
  public post(url :any ,data:any,httpOption:any) : Observable < any >{
    return this.http.post(url,data,httpOption)
    .pipe(
      retry(3),//请求失败最多请求3次
      tap(_error => this.log(error) ),
      catchError(this.handleError)
    );
  }

  /**
   * get()请求
   * @param url 
   * @param httpOption 
   */
  public get(url :any ,httpOption:any) : Observable < any > {
    return this.http.get(url,httpOption)
    .pipe(
      retry(3),//请求失败最多请求3次
      tap(_error => this.log(error) ),
      catchError(this.handleError)
    );
  }
  /**
   * detete()请求
   * @param url 
   * @param httpOption 
   */
  public delete(url :any ,httpOption:any) : Observable < any >{
    return this.http.delete(url,httpOption)
    .pipe(
      retry(3),//请求失败最多请求3次
      tap(_error => this.log(error) ),
      catchError(this.handleError)
    );
  }
  /**
   * put()请求
   * @param url 
   * @param data 
   * @param httpOption 
   */
  public put(url :any ,data:any, httpOption:any) : Observable < any > {
    return this.http.put(url,httpOption)
    .pipe(
      retry(3),//请求失败最多请求3次
      tap(_error => this.log(error) ),
      catchError(this.handleError)
    );

  }

    /**
   * patch请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public patch(url: string, params: any, headers: any) : Observable < any >{
    return this.http.patch(url, params, { headers: headers })
    .pipe(
      retry(3),//请求失败最多请求3次
      tap(_error => this.log(error) ),
      catchError(this.handleError)
    );
  }

  
  log(msg :any){
    this.msgService.log(msg);
  }

  /**
   * 
   * 错误处理 如果错误返回传的观察者的result 
   * @param data 
   * @param result 
   */


  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  /*
  *获取token 调取后台接口
  */
  asyncGetToken(usersName :string , usersPsw : string) : Observable < any >{
    return this.request({
      method: 'get',
      url: 'api/dashHeros'+usersName+usersPsw,
      data :{
        Name : usersName,
        psw : usersPsw
      }
    });
  }

  /*
  *刷新token 调取后台接口
  */
  asyncRefreshToken(refreshToken: any,usersName :string , usersPsw : string) : Observable < any >{
    return this.request({
      method: 'get',
      url: 'api/dashHeros'+usersName+usersPsw+refreshToken,
      data: {
        refresh:refreshToken
      },
    });
  }


}
