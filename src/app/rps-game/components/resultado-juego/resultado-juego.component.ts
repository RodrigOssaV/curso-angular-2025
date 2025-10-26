import { Component, Input } from '@angular/core';
import { ResultadoJuego } from '@RPSGame/models/jugada';

@Component({
  selector: 'app-resultado-juego',
  templateUrl: './resultado-juego.component.html',
  styleUrls: ['./resultado-juego.component.css'],
})
export class ResultadoJuegoComponent {
  @Input() ganador: ResultadoJuego[] = [];
  @Input() numeroGanador: number = 0;

  // icon play
  iconPlay = [
    {
      name: 'tijera',
      icon: '✂',
    },
    {
      name: 'piedra',
      icon: '🪨',
    },
    {
      name: 'papel',
      icon: '🖐️',
    },
  ];

  getNombreGanador(resultado: ResultadoJuego): string {
    const g = resultado.ganador;
    return typeof g === 'string' ? g : g.name;
  }

  getIcon(jugada: string): string {
    const found = this.iconPlay.find((item) => item.name === jugada);
    return found ? found.icon : '...';
  }
}
