import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

//directiva component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  users=[{
  }];
  constructor(private _userService: UsersService) { }

  //lifecycle onInit hook
  ngOnInit(): void {
    this.getUsers();
  }
  
  //uso de ngColor
  colorStyle() {
    return '#225487';
  }

  //uso de ngClass
  flagStyle = false;
  changeStyle(){
    this.flagStyle = !this.flagStyle;
  }


  //Metodo para traer registros de los usuarios
  getUsers() {
    this._userService.getUsers()
      .subscribe({
        next: (response) => {
          this.users = response;
        },
        error: (error) => {
          console.log(error);
        },
        complete() {
          console.log('Peticion completa');
          
        },
      })
  }

}
