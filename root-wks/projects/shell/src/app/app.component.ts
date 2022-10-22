import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private router: Router){

  }
  
  go(){
    this.router.navigate(['/', 'sample'])
    .then(nav => {
      console.info(nav);
    }, err => {
      console.warn('Micro serviço pode esá indisponível: ', err)
    })
  }
}
