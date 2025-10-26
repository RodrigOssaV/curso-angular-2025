import { Component, Input, OnChanges } from '@angular/core';
import { Move } from '@pokemon/models/move';

@Component({
  selector: 'app-poke-moves',
  templateUrl: './poke-moves.component.html',
  styleUrls: ['./poke-moves.component.css'],
})
export class PokeMovesComponent implements OnChanges {
  @Input() pokeMoves?: Move[];

  constructor() {}

  ngOnChanges(): void {
    if (this.pokeMoves) {
      // console.log(this.pokeMoves);
    }
  }
}
