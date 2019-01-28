import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public messages : string[] = [];
  constructor() { }

  /**
   * 清除Messages
   */
  clear() : void{
    this.messages = [];
  }

  /**
   * 像messages数组内添加消息
   * @param message 
   */
  add(message : string) : void{
    this.messages.push(message);
  }
}
