import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { from  } from 'rxjs';
import { error } from 'util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  protected usersData :any ='';
  protected usersName : string ="admin";
  protected usersPsw : string = 'admin@123';
  protected error: any;
  constructor(private userHttp :HttpService,private router: Router) { }

  ngOnInit() {
  }
  /**
   *登录函数
   */
  login(){
    this.asyncGetToken(this.usersName,this.usersPsw);
  }

  /**
   * 传递用户名或密码 获取token
   * @param usersName 
   * @param usersPsw 
   */
  asyncGetToken( usersName :string , usersPsw : string)
  {
    alert("asyncGetToken"+usersName+usersPsw);

    this.userHttp.asyncGetToken(usersName, usersPsw ).subscribe(
      (data) => {
        if(data['access']){
          localStorage.setItem('access_token', data['access']);   
        }
        else if(data['refresh']){
          localStorage.setItem('refresh',data['refresh']);

        }
        else
        {
          this.userHttp.log(data)
        }
      }
      
    );
    
  }

  /**
   * 用token获取Data
   */
  getData ()
  {
    let params ={
      method: 'get',
      url:'https://tcarls-int.bba-app.com/rest-api/v1/questions?limit=10&offset=0',
    }
    this.userHttp.request(params).subscribe(
      (data) => {
        this.usersData = data;
        this.router.navigate([`/dashboard`]);
      },   
    )
  }


  /**
   * 生成error文件
   */
  saveTextAsFile():void{
    let error : any = this.userHttp.errorMsg;
    console.log(error)
    if(!error) {
      console.error('Console.save: No data')
      return;
    }
    var blob = new Blob([error], {type: 'text/plain'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')
    // FOR IE:

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, 'newfile001.txt');
    }
    else{
      var e = document.createEvent('MouseEvents'),
          a = document.createElement('a');

      a.download = 'newfile001.txt';
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
      e.initEvent('click', true, false);
      a.dispatchEvent(e);
    }
  }

}

