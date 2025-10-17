import { Component, Input } from '@angular/core';
import { Character } from '@app/models/character';

@Component({
  selector: 'app-biografia-personaje',
  templateUrl: './biografia-personaje.component.html',
  styleUrls: ['./biografia-personaje.component.css']
})
export class BiografiaPersonajeComponent {
  @Input() personaje?: Character ;
  @Input() numeroJugador!: number;

}
