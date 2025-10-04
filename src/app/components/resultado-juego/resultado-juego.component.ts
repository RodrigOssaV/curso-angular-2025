import { Component, Input } from '@angular/core';
import { ResultadoJuego } from '@app/models/jugada';

@Component({
  selector: 'app-resultado-juego',
  templateUrl: './resultado-juego.component.html',
  styleUrls: ['./resultado-juego.component.css'],
})
export class ResultadoJuegoComponent {
  @Input() ganador: ResultadoJuego[] = [];

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
