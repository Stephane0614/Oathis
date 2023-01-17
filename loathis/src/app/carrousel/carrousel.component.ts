import { Component, Input, OnInit } from '@angular/core';


interface carrouselImages{
  imageSrc : string;
  imageAlt : string;
}


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit{


  @Input() images: carrouselImages[] = []
  @Input() indicators = true; 
  @Input() controls = true ;
  @Input() autoSlide = false;
  //Rotation par défaut 2 seconde
  @Input() slideInterval = 2000;

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void{
   setInterval(() =>{
      this.onNextClick();
    },this.slideInterval);
  }

  //Les images sont selectionnée en fonction de l'index sur lequel on clique
  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    } else{
      this.selectedIndex--;
    }
  }

   onNextClick(): void{
      if(this.selectedIndex === this.images.length - 1){
        this.selectedIndex = 0;
      }else{
        this.selectedIndex++;
      }
    }
  
}
