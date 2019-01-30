import { Type } from '@angular/core';

/**
 * 创建一个item类
 */

export class Item{

    constructor(public component :Type<any>,public data :any ){

    }

}