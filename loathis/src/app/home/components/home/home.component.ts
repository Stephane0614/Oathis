import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  images = [
    {
      imageSrc:
      'assets/page_accueil/kidicarus.jpg',
      imageAlt: 'image 1',
    },
    {
      imageSrc:
      'assets/page_accueil/fifa23.jpg',
      imageAlt: 'image 2',
    },
    {
      imageSrc:
      'assets/page_accueil/protocol.jpg',
      imageAlt: 'image 3',
    },
    {
      imageSrc:
      'assets/page_accueil/thelastofus.jpg',
      imageAlt: 'image 4',
    },
  ]
}
