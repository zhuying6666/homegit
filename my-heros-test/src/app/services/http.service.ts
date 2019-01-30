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
    const access_token = localStorage.getItem("access_token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token' + ' ' + access_token
      })
    };
    
    // const httpOptions = new HttpHeaders().set('Authorization', 'my-new-auth-token');
    if (params['method'] == 'post' || params['method'] == 'POST') {
      // alert('request'+params['url']);

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
      tap( data => this.log(data) ),
      catchError(this.handleError)
    );
  }

  /**
   * get()请求
   * @param url 
   * @param httpOption 
   */
  public get(url :any ,httpOption:any) : Observable < any > {
    // alert(`get${url}`);

    return this.http.get(url,httpOption)
    .pipe(
      tap( data => this.log(data) ),
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
      tap( data => this.log(data) ),
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
      tap( data => this.log(data) ),
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
      tap( data => this.log(data) ),
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
    //检查是否联网
    if (navigator.onLine) {
      console.log("网络已连接");
    } else {
      //执行离线状态时的任务
      console.log("请检查你的电脑是否联网");
    }
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(error)
  
    }
    if(error.status === 401){
      const  refresh_token = localStorage.getItem('refresh');
      this.asyncRefreshToken(refresh_token)
    }
    else if(error.status === 500){
      console.error('服务器错误')
    }

    return throwError(
      'Something bad happened; please try again later.');
  };


  /*
  *获取token 调取后台接口
  */
  asyncGetToken(usersName :string , usersPsw : string) : Observable < any >{
    // alert("asyncGetToken"+usersName);
    return this.request({
      method: 'post',
      url: 'https://tcarls-int.bba-app.com/rest-api/v1/tokens',
      data: {
        account:usersName,
        password:usersPsw,
      },
    });
  }

  /*
  *刷新token 调取后台接口
  */
  asyncRefreshToken(refreshToken: any) : Observable < any >{
    return this.request({
      method: 'post',
      url: 'https://tcarls-int.bba-app.com/rest-api/v1/tokens/refresh',
      data: {
        refresh:refreshToken
      },
    });
  }


}
