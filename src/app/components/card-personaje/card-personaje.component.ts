import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '@app/models/character';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent {

  @Input() personaje?: Character;
  // @Output() favorito = new EventEmitter<Character>();
  // @Output() noFavorito = new EventEmitter<Character>();

  constructor(private router: Router){}

  marcarComoFavorito(){
    if (this.personaje){
      // this.favorito?.emit(this.personaje);
    }
  }

  desmarcarFavorito(){
    if(this.personaje){
      // this.noFavorito?.emit(this.personaje);
    }
  }

  irAlPersonaje(id: number){
    this.router.navigate(["/personaje", id]);
  }
}
