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
  template: `
  <div class="search-container">
    <input class="search" type="text" placeholder="Rechercher un Pokémon" [(ngModel)]="searchTerm" (input)="filterPokemon()">
  <div>
    <div class="pokemon-list">
      <div class="pokemon-card" *ngFor="let pokemon of filteredPokemonList">
        <img [src]="pokemon.picture" alt="{{ pokemon.name }}">
        <h2>{{ pokemon.name }}</h2>
        <p>Type: {{ pokemon.types }}</p>
        <p>Date de création: {{ pokemon.created }}</p>
      </div>
    </div>
  `,
  styles: [`
  .search-container {
    text-align: center;
  }
  .search {
    width: 25%;
    margin: 20px auto;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
  
  .search::placeholder {
    color: #999;
  }
    .pokemon-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .pokemon-card {
      width: 30%;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      background-color: #fff;
      text-align: center;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  `]
})
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
