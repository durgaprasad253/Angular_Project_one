import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String = 'Portfolio';

  constructor(public auth: AuthServiceService, private router: Router) { }

  //LifeCycle method , we can put code that runs when the component loads(Initialise Code).
  ngOnInit(): void {}

  toggleLogin(): void{
    console.log(
      '[HeaderComponent] toggleLogin() - isLoggedIn:',
      this.auth.isLoggedIn
    );
    if (this.auth.isLoggedIn) {
      this.auth.logout().then(() => {
        this.router.navigate(['/login']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}