import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon, Stat } from '@app/pokemon/models/pokemon';

@Component({
  selector: 'app-poke-stats',
  templateUrl: './poke-stats.component.html',
  styleUrls: ['./poke-stats.component.css'],
})
export class PokeStatsComponent implements OnChanges {

  @Input() pokeStats?: Pokemon;

  stats!: Stat[];

  ngOnChanges(changes: SimpleChanges): void {
    if(this.pokeStats){
      // console.log(this.pokeStats.stats);
      this.stats = this.pokeStats.stats;
    }
  }
}
