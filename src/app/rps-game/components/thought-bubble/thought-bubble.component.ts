import { Component, Input } from '@angular/core';
import { Jugada } from '@RPSGame/models/jugada';

@Component({
  selector: 'app-thought-bubble',
  templateUrl: './thought-bubble.component.html',
  styleUrls: ['./thought-bubble.component.css']
})
export class ThoughtBubbleComponent {

  @Input() jugadorPensando: boolean = true;
  @Input() jugadaJugador!: Jugada | "";

  // icon play
  iconPlay = [
    {
      name: 'tijera',
      icon: '✌️',
    },
    {
      name: 'piedra',
      icon: '✊',
    },
    {
      name: 'papel',
      icon: '🖐️',
    }
  ]

  getIcon(jugada: string): string {
    const found = this.iconPlay.find(item => item.name === jugada);
    return found ? found.icon : '...';
  }
}
