import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomNumberService } from '../../services/random-number.service';
import { AuthService } from 'src/app/modules/Login/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  randomNumber: Observable<number>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    
  }

  logout() {
    this.authService.logout()
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/login']);
        }
      });
  }

}
