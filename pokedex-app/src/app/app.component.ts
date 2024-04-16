/* import { Component } from '@angular/core';
import { POKEMONS } from './api-pokemons';
import { Pokemon } from './pokemon.models';

@Component({
  selector: 'app-root',
  template: `
  Liste de pokemons
  <div *ngIf="selectedPokemon">
      <h2>Youpi c'est le pokemon {{ selectedPokemon.name }}</h2>
      <img [src]="selectedPokemon.picture" alt="{{ selectedPokemon.name }}"/>
  </div>
  `,
  styles: []
})
export class AppComponent {
  pokemonList = POKEMONS;
  selectedPokemon : Pokemon | null = null;

  ngOnInit(){
    console.log(this.pokemonList)
    this.selectPokemon(this.pokemonList[1])
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
    this.selectedPokemon =  pokemon;
  }

} */
import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './api-pokemons';
import { Pokemon } from './pokemon.models';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  filteredPokemonList: Pokemon[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.filteredPokemonList = this.pokemonList;
  }

  filterPokemon(): void {
    this.filteredPokemonList = this.pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
