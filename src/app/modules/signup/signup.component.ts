import { Component, OnInit } from '@angular/core';
import {ElementRef, ViewChild} from '@angular/core';
import {user} from "src/app/services/user/user";
import {UserService} from "src/app/services/user/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";



interface rol{
      value: string;
      viewValue: string;
    }

    
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})




export class SignupComponent implements OnInit {
  userModel =new user("", "", "" ,"");
  
roles: rol[] = [
      {value: 'admin', viewValue: 'admin'},
      {value: 'user', viewValue: 'user'},
    
    ];

  constructor(private UserService: UserService, private snackBar: MatSnackBar) { }



  async guardar() {
    
    // Guardamos producto
    const idUsuarioGuardado = await this.UserService.agregarUsuario(this.userModel);
    // Y luego las fotos
    const fd = new FormData();

    fd.append("idProducto", idUsuarioGuardado);

    this.snackBar.open("Usuario registrado exitosamente", "", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    });

    this.userModel = new user("", "","","");
    
  }



  ngOnInit(): void {
  }

}
