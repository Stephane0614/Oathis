import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  toggle!: boolean;

  ngOnInit(){
    this.toggle = false;
  }

   myFunction() {

    //Si le menu est fermé on l'ouvre, sinon on le ferme.
    !this.toggle ? this.toggle = true:this.toggle = false;

  }
}
