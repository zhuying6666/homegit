import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { 
    Observable, 
    throwError 
} from 'rxjs'
import { 
    timeout, 
    delay, 
    retryWhen, 
    scan, 
    tap, 
    catchError 
} from 'rxjs/operators'
/** 超时时间 */
const DEFAULTTIMEOUT = 3000
/** 最大重试次数 */
const MAXRETRYCOUNT = 3
@Injectable()

export class NoopInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            timeout(DEFAULTTIMEOUT),
            retryWhen(err$ => {
                //重试 节奏控制器
                return err$.pipe(
                    scan((errCount, err) => {
                        if (errCount >= MAXRETRYCOUNT) {
                            throw err
                        }
                        return errCount + 1
                    }, 0),
                    delay(3000),
                    tap(errCount => {
                        if(errCount == 1){
                            //第一次重试时显示友好信息
                            console.error('网络超时','正在重新请求中...')
                        }
                    })
                )
            }),

            catchError((err: HttpErrorResponse) => {
                console.error('网络超时','请重试')
                return throwError(err)
            })
        )
    }   
}