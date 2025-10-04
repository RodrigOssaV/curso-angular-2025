import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '@app/models/character';
import { RickAndMortyService } from '@app/services/rick-and-morty.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  characters: Character[] = [];
  personajeSeleccionado?: Character;

  constructor(
    private router: Router,
    private rickAndMortyService: RickAndMortyService,
  ){}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.map(c => ({...c, mostrar: false}));
      },
      error: (error) => console.error(error),
    });
  }

  irAlPersonaje(id: number){
    this.router.navigate(["/personaje", id]);
  }

  seleccionarPersonaje(personaje: Character){
    this.personajeSeleccionado = personaje;
  }

  onMarcadoFavorito(p: Character){
    let personaje = this.characters.find(c => c.id === p.id);
    if ( personaje && !personaje.name.includes('⭐')){
      personaje.name = '⭐' + personaje.name + '⭐';
    }
  }

  onDesmarcadoFavorito(p: Character){
    let personaje = this.characters.find(c => c.id === p.id);
    if (personaje){
      personaje.name = personaje.name.replace(/⭐/g, "");
    }
  }
}
