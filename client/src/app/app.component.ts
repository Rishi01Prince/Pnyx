import { Component } from '@angular/core';
import { LoginService } from 'src/services/login.service';

const config = {
  apiKey: 'AIzaSyCXDVFX6EdK1-4DpbEGrqocOgpPAEqN7DQ',
  databaseURL: 'https://Pnyx-fbf5b-default-rtdb.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private loginService: LoginService) {}

  title = 'project-Pnyx';

  ngOnInit() {
    this.loginService.autoLogin();
  }
  
}
