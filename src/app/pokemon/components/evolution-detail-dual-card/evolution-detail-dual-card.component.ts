import { Component, Input } from '@angular/core';
import { Chain, EvolutionDetail } from '@pokemon/models/evolution-chain';

@Component({
  selector: 'app-evolution-detail-dual-card',
  templateUrl: './evolution-detail-dual-card.component.html',
  styleUrls: ['./evolution-detail-dual-card.component.css'],
})
export class EvolutionDetailDualCardComponent {
  @Input() evolutionDetailDualCard?: Chain;

  chainDetail!: EvolutionDetail[];

  ngOnChanges(): void {
    if (this.evolutionDetailDualCard) {
      this.chainDetail = this.evolutionDetailDualCard.evolution_details;
    }
  }

  getEvolutionRequirement(details: EvolutionDetail[]): string {
    if (!details || details.length === 0) return '';

    const requirements = details
      .map((detail) => {
        if (detail.min_level) {
          return `Level ${detail.min_level}`;
        }
        if (detail.item?.name) {
          return detail.item.name
            .replace('-', ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());
        }
        if (detail.min_happiness) {
          const timeCondition = detail.time_of_day
            ? ` (${detail.time_of_day})`
            : '';
          return `Happiness ${detail.min_happiness}${timeCondition}`;
        }
        if (detail.min_affection) {
          return `Affection ${detail.min_affection}`;
        }
        if (detail.location?.name) {
          return detail.location.name
            .replace('-', ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());
        }
        if (detail.known_move_type?.name) {
          return `Fairy move`;
        }
        if (detail.trigger?.name && detail.trigger.name !== 'level-up') {
          return detail.trigger.name
            .replace('-', ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());
        }
        return '';
      })
      .filter((req) => req);

    return requirements.slice(0, 2).join(' / '); // Máximo 2 requerimientos para no saturar
  }
}
