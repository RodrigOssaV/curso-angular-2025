import { Component, Input, OnInit } from '@angular/core';
import { AbilityResponse } from "@pokemon/models/ability";

@Component({
  selector: 'app-poke-ability-detail',
  templateUrl: './poke-ability-detail.component.html',
  styleUrls: ['./poke-ability-detail.component.css']
})
export class PokeAbilityDetailComponent implements OnInit{

  @Input() ability?: AbilityResponse;
  
  name: string = '';
  flavor_text: string = '';
  short_effect: string = '';

  ngOnInit(): void {
    if(this.ability){
      console.log(this.ability);
      this.name = this.ability.name;
      this.flavor_text = this.ability.flavor_text_entries[0].flavor_text;
      this.short_effect = this.ability.effect_entries[0].short_effect;
    }
  }

}
