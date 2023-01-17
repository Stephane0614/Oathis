import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){ }

  get search(){
    //On récupère la valeur de search
    return this.searchForm.get('search');
  }

  buildForm(){
    //On construit le formulaire
    this.searchForm = this.formBuilder.group({
      'search':['', [
        //Pour activer la fonction de recherche, le champs est requis
        Validators.required
      ]]
    })
  }

  ngOnInit(){
    this.buildForm()
  }

  submit(){
    if(this.searchForm.invalid) return;
    console.log('formulaire OK');
  }
}
