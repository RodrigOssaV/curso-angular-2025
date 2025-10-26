import { Component, OnInit } from '@angular/core';
import { Character } from '@RPSGame/models/character';
import { Jugada, ResultadoJuego } from '@RPSGame/models/jugada';
import { RickAndMortyService } from '@RPSGame/services/rick-and-morty.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  characters: Character[] = [];
  personajeSeleccionado?: Character;

  // players
  selectPlayerOne!: Character;
  selectPlayerTwo!: Character;

  // plays
  jugadaJugarUno!: Jugada;
  jugadaJugarDos!: Jugada;

  // thinkings
  jugadorUnoPensando: boolean = true;
  jugadorDosPensando: boolean = true;

  // winner
  ganador: ResultadoJuego[] = [];
  numeroJugadorGanador: number = 0;

  // loading controller
  cargandoJugadores: boolean = true;

  loadingTitle: string = 'Loading Battle Royal...'
  loadingCharactersBattleRoyal: boolean = true;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.cargandoJugadores = true;
    this.rickAndMortyService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.map((c) => ({ ...c, mostrar: false }));

        if (this.characters.length > 0) {
          this.cargandoJugadores = false;
        }
        this.loadingCharactersBattleRoyal = false;
      },
      error: (error) => console.error(error),
    });
  }

  seleccionarPersonaje(personaje: Character) {
    if (this.selectPlayerOne !== undefined) {
      this.selectPlayerTwo = personaje;
      this.jugadorUnoPensando = true;
      this.jugadorDosPensando = true;
      return;
    }
    this.selectPlayerOne = personaje;
  }

  handleGanador(resultado: ResultadoJuego) {
    this.ganador = [];
    this.jugadaJugarUno = resultado.jugada_playerOne;
    this.jugadaJugarDos = resultado.jugada_playerTwo;
    this.jugadorUnoPensando = false;
    this.jugadorDosPensando = false;

    this.ganador.push(resultado);
    this.getNumeroJugadorGanador(resultado.ganador);
  }

  resetJuego() {
    this.jugadorUnoPensando = true;
    this.jugadorDosPensando = true;
    this.selectPlayerOne = undefined!;
    this.selectPlayerTwo = undefined!;
    this.jugadaJugarUno = undefined!;
    this.jugadaJugarDos = undefined!;
    this.ganador = [];
  }

  resetJuegoPensando() {
    this.jugadorUnoPensando = true;
    this.jugadorDosPensando = true;
    this.jugadaJugarUno = undefined!;
    this.jugadaJugarDos = undefined!;
    this.ganador = [];
  }

  getNumeroJugadorGanador(ganador: Character | string){
    if(typeof ganador === 'string') {
      this.numeroJugadorGanador = 0; // empate
      return
    } 

    if(typeof ganador === 'object'){
      const { name: name_ganador } = ganador;
      const { name: name_playerOne } = this.selectPlayerOne;

      if (name_ganador === name_playerOne) {
        this.numeroJugadorGanador = 1; // gana jugador uno
      } else {
        this.numeroJugadorGanador = 2; // gana jugador dos
      }
    }
  }

  isSelectionLocked(): boolean {
    return !!(this.selectPlayerOne && this.selectPlayerTwo);
  }
}
