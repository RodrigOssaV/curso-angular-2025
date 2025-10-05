import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '@app/models/character';
import { Jugada, ResultadoJuego } from '@app/models/jugada';

@Component({
  selector: 'app-button-luchar',
  templateUrl: './button-luchar.component.html',
  styleUrls: ['./button-luchar.component.css'],
})
export class ButtonLucharComponent implements OnInit {
  @Input() playerOne?: Character;
  @Input() playerTwo?: Character;
  @Input() resetCompletoJuego!: () => void;
  @Output() ganadorJuego = new EventEmitter<ResultadoJuego>();

  jugadoresJugando: boolean = false;

  private jugadas: Jugada[] = [
    { id: 1, jugada: 'piedra' },
    { id: 2, jugada: 'papel' },
    { id: 3, jugada: 'tijera' },
  ];

  constructor() {}

  ngOnInit(): void {}

  buttonFight() {
    this.jugadoresJugando = true;
    this.resetCompletoJuego();
    setTimeout(() => {
      const jugadaJugadorUno = this.comienzaJugada();
      const jugadaJugadorDos = this.comienzaJugada();
      const seleccionaGanador = this.seleccionaGanador(
        jugadaJugadorUno,
        jugadaJugadorDos
      );
      const data_juego = {
        ganador: seleccionaGanador,
        jugada_playerOne: jugadaJugadorUno,
        jugada_playerTwo: jugadaJugadorDos,
      };
      this.ganadorJuego.emit(data_juego);
      this.jugadoresJugando = false;
    }, 1000);
  }

  comienzaJugada() {
    const indice = Math.floor(Math.random() * this.jugadas.length);
    const jugadaSeleccionada = this.jugadas[indice];
    return jugadaSeleccionada;
  }

  seleccionaGanador(playerOne: Jugada, playerTwo: Jugada) {
    const jugardorUno = playerOne.jugada;
    const jugadorDos = playerTwo.jugada;
    let seleccionaGanadorJuego: Character | string;

    if (jugardorUno === jugadorDos) {
      seleccionaGanadorJuego = 'Empate';
      return seleccionaGanadorJuego;
    }

    if (
      (jugardorUno === 'piedra' && jugadorDos === 'tijera') ||
      (jugardorUno === 'papel' && jugadorDos === 'piedra') ||
      (jugardorUno === 'tijera' && jugadorDos === 'papel')
    ) {
      seleccionaGanadorJuego = this.playerOne!;
      return seleccionaGanadorJuego;
    } else {
      seleccionaGanadorJuego = this.playerTwo!;
      return seleccionaGanadorJuego;
    }
  }
}
