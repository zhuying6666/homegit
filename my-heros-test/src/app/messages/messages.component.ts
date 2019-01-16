import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { format } from 'url';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

// 当在模板中使用service时必须用public定义服务
  constructor(public herosMessage : MessagesService) { }

  ngOnInit() {
  }
  
}
