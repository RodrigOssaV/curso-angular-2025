import { Component, OnInit } from '@angular/core';
import { Character } from '@app/models/character';
import { Jugada, ResultadoJuego } from '@app/models/jugada';
import { RickAndMortyService } from '@app/services/rick-and-morty.service';

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

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.map((c) => ({ ...c, mostrar: false }));
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
    console.log(this.ganador);
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
}
