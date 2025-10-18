import { Character } from "./character";

export interface Ganador {
  ganador: Character | "Empate";
  jugada_playerOne: { id: number; jugada: string };
  jugada_playerTwo: { id: number; jugada: string };
}