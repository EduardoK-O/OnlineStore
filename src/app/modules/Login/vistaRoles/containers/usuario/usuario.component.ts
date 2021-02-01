import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomNumberService } from '../../services/random-number.service';
import { AuthService } from 'src/app/modules/Login/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  randomNumber: Observable<number>;

  constructor() {}

  ngOnInit() {
    
  }

  

}