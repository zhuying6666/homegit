import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor() { }
  protected message : any[] = [];

  /**
   * add msg to message
   * @param msg 
   */
  log( msg : any){
    // let msg = '请求失败';
    if (msg.status == 500) {
      console.log('服务器错误');
      this.message.push('服务器错误');
    }
    else
    {
      this.message.push(msg);
      console.log(msg);
    }
   
  }


}
