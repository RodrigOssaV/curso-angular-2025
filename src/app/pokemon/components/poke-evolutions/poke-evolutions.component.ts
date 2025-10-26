import { Component, Input, OnChanges } from '@angular/core';
import { Chain, EvolutionDetail, Specie } from '@pokemon/models/evolution-chain';

@Component({
  selector: 'app-poke-evolutions',
  templateUrl: './poke-evolutions.component.html',
  styleUrls: ['./poke-evolutions.component.css']
})
export class PokeEvolutionsComponent implements OnChanges {

  @Input() evolutionChain?: Chain;

  chain!: Chain;
  specie!: Specie;

  constructor() { }

  ngOnChanges(): void {

    if(this.evolutionChain){
      this.chain = this.evolutionChain;
      this.specie = this.chain.species;
      // console.log(this.specie);
    }
  }

  getArrowDirection(index: number, total: number): string {
    if (total === 2) {
      return index === 0 ? 'arrow-left' : 'arrow-right';
    } else if (total === 3) {
      switch (index) {
        case 0: return 'arrow-left';
        case 1: return 'arrow-down';
        case 2: return 'arrow-right';
        default: return 'arrow-down';
      }
    } else {
      // Para más de 3, distribuir alrededor
      const angle = (360 / total) * index;
      if (angle <= 45 || angle > 315) return 'arrow-right';
      if (angle > 45 && angle <= 135) return 'arrow-down';
      if (angle > 135 && angle <= 225) return 'arrow-left';
      return 'arrow-up';
    }
  }

  getArrowSymbol(index: number, total: number): string {
    if (total === 2) {
      return index === 0 ? '↙' : '↘';
    } else if (total === 3) {
      switch (index) {
        case 0: return '↙';
        case 1: return '↓';
        case 2: return '↘';
        default: return '↓';
      }
    } else {
      const angle = (360 / total) * index;
      if (angle <= 45 || angle > 315) return '→';
      if (angle > 45 && angle <= 135) return '↘';
      if (angle > 135 && angle <= 225) return '↙';
      return '↖';
    }
  }

  getCircularPosition(index: number, total: number): string {
    const angle = (360 / total) * index - 90; // -90 para que el primer elemento esté arriba
    const radius = 180; // Radio del círculo en pixels
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    
    return `translate(${x}px, ${y}px)`;
  }

  getCircularX(index: number, total: number): number {
    const angle = (360 / total) * index - 90; // -90 para que el primer elemento esté arriba
    const radius = 180; // Radio del círculo en pixels
    const radians = (angle * Math.PI) / 180;
    const centerX = 250; // Centro del contenedor (500px / 2)
    const itemWidth = 60; // Mitad del ancho del elemento para centrarlo
    
    return centerX + Math.cos(radians) * radius - itemWidth;
  }

  getCircularY(index: number, total: number): number {
    const angle = (360 / total) * index - 90; // -90 para que el primer elemento esté arriba
    const radius = 180; // Radio del círculo en pixels
    const radians = (angle * Math.PI) / 180;
    const centerY = 250; // Centro del contenedor (500px / 2)
    const itemHeight = 60; // Mitad de la altura del elemento para centrarlo
    
    return centerY + Math.sin(radians) * radius - itemHeight;
  }

  getArrowRotation(index: number, total: number): string {
    const angle = (360 / total) * index - 90; // -90 para que el primer elemento esté arriba
    // La flecha debe apuntar hacia el centro, así que rotamos hacia el centro + 180°
    const arrowAngle = angle + 180;
    return `rotate(${arrowAngle}deg)`;
  }

  getEvolutionRequirement(details: EvolutionDetail[]): string {
    if (!details || details.length === 0) return '';
    
    const requirements = details.map(detail => {
      if (detail.min_level) {
        return `Level ${detail.min_level}`;
      }
      if (detail.item?.name) {
        return detail.item.name.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      }
      if (detail.min_happiness) {
        const timeCondition = detail.time_of_day ? ` (${detail.time_of_day})` : '';
        return `Happiness ${detail.min_happiness}${timeCondition}`;
      }
      if (detail.min_affection) {
        return `Affection ${detail.min_affection}`;
      }
      if (detail.location?.name) {
        return detail.location.name.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      }
      if (detail.known_move_type?.name) {
        return `Fairy move`;
      }
      if (detail.trigger?.name && detail.trigger.name !== 'level-up') {
        return detail.trigger.name.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      }
      return '';
    }).filter(req => req);
    
    return requirements.slice(0, 2).join(' / '); // Máximo 2 requerimientos para no saturar
  }
}
