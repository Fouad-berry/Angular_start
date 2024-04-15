import { Component } from '@angular/core';
import { POKEMONS } from './api-pokemons';
import { Pokemon } from './pokemon.models';

@Component({
  selector: 'app-root',
  template: `Liste de pokemons`,
  styles: []
})
export class AppComponent {
  pokemonList = POKEMONS;

  ngOnInit(){
    console.log(this.pokemonList)
    this.selectPokemon(this.pokemonList[1])
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }

}