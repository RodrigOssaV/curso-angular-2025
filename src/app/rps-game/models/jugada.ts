import { Character } from "./character";

export interface Jugada {
  id: number;
  jugada: string;
}

export interface ResultadoJuego {
  ganador: Character | string;
  jugada_playerOne: Jugada;
  jugada_playerTwo: Jugada;
}[]