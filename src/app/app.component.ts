import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input_output_basic';

  testName = 'Jenny'
  user = {
    name:'Lisa',
    age:'18',
    country:'Japan'
  }
  users = ['John', 'Kyle']
  addUser(user:any){
    this.users.push(user)
  }
}
