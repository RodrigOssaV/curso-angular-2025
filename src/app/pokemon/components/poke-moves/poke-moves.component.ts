import { Component, Input, OnChanges } from '@angular/core';
import { Move, MoveResponse } from '@pokemon/models/move';
import { PokemonService } from '@services/pokemon.service';

@Component({
  selector: 'app-poke-moves',
  templateUrl: './poke-moves.component.html',
  styleUrls: ['./poke-moves.component.css'],
})
export class PokeMovesComponent implements OnChanges {
  @Input() pokeMoves?: MoveResponse[];

  pokeMoveList?: any; /* MoveResponse[] */
  pokeMove!: Move;

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    if (this.pokeMoves) {
      // console.log(this.pokeMoves);
      this.pokeMoveList = [...this.pokeMoves];
      this.pokeMoves.map((pkmove) => this.getMoreInfoMoves(pkmove.move.name));
      // console.log(this.pokeMoveList);
    }
  }

  getMoreInfoMoves(name: string) {
    // console.log(name);
    this.pokemonService.getMove(name).subscribe({
      next: (response) => {
        // console.log(response);
        // console.log(this.pokeMoveList);
        this.pokeMoveList = this.pokeMoveList?.map((pkml: any) =>
          pkml.move.name === response.name
            ? { ...pkml, detail: response }
            : pkml
        );
        // // this.pokeMove = response;
        // console.log(this.pokeMoveList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
