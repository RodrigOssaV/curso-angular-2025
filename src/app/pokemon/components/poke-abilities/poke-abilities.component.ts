import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PokeAbilityDetailComponent } from '@pokecomponents/poke-ability-detail/poke-ability-detail.component';
import { Ability, Pokemon } from '@pokemon/models/pokemon';
import { PokemonService } from '@pokemon/services/pokemon.service';

@Component({
  selector: 'app-poke-abilities',
  templateUrl: './poke-abilities.component.html',
  styleUrls: ['./poke-abilities.component.css'],
})
export class PokeAbilitiesComponent implements OnChanges {
  @Input() pokeAbilities?: Pokemon;

  abilities?: Ability[];

  @ViewChild('ability_detail_component', { read: ViewContainerRef })
  ability_detail_component!: ViewContainerRef;

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    if (this.pokeAbilities) {
      this.abilities = this.pokeAbilities.abilities;
    }
  }

  onClickAbility(ability: Ability) {

    this.pokemonService.getAbility(ability.ability.url)
      .subscribe({
        next: response => {
          // console.log(response);
          this.ability_detail_component.clear();
          const abilityComponent = this.ability_detail_component.createComponent(PokeAbilityDetailComponent);
          abilityComponent.instance.ability = response;
        },
        error: error => {
          console.error(error)
        }
      })
  }
}
