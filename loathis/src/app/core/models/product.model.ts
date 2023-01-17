export class Product {
  name!: string;
  image!: string;
  description!: string;
  price!: number;
  isNew!: boolean;

  constructor(){
      this.name = 'Playstation 4 edition spider';
      this.image = "assets/page_accueil/ps4spiderman.jpg";
      this.description = "ps4 spider man edition";
      this.price = 499.99;
  }

}
