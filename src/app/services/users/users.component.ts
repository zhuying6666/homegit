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
  protected usersName : string ="admin";
  protected usersPsw : string = 'admin@123';
  protected error: any;
  constructor(private userHttp :HttpService) { }

  ngOnInit() {
  }

  login(){
    this.asyncGetToken(this.usersName,this.usersPsw);
  }
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

  getData ()
  {
    let params ={
      method: 'get',
      url:'https://tcarls-int.bba-app.com/rest-api/v1/questions?limit=10&offset=0',
    }
    this.userHttp.request(params).subscribe(
      (data) => {
        this.usersData = data; 
      },   
    )
  }

}

