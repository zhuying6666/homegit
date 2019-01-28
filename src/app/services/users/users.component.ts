import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { from  } from 'rxjs';
import { error } from 'util';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  protected usersData :any ='';
  protected usersName : string ="zhuying";
  protected usersPsw : string = '111';
  protected error: any;
  constructor(private userHttp :HttpService) { }

  ngOnInit() {
  }
  login(){
    this.asyncGetToken(this.usersName,this.usersPsw);
  //  this.getData();
  }
  asyncGetToken( usersName :string , usersPsw : string)
  {

    this.userHttp.asyncGetToken(usersName, usersPsw ).subscribe(
      (data) => {
        if(data['access']){
          localStorage.setItem('access_token', data['access']);
          
        }
        else
        {
          this.userHttp.log(data)
        }
      }
      
    );
    
  }

  getData ()
  {
    let params ={
      method: 'post',
      url:'',
      data: {
          users:1
      }
    }
    this.userHttp.request(params).subscribe(
      (data) => {
        this.usersData = data; 
      },   
      error => {
        this.error = error // error path
        console.error(this.error);
        
      }
    )
  
    
  }

}

