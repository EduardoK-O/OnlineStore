import { Injectable } from '@angular/core';
import {HttpService} from "src/app/services/http.service";
import {user} from 'src/app/services/user/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  public async agregarUsuario(user: user) {
    return await this.http.post("/signup", user);
  }
}
