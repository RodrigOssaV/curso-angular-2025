import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character, Episode } from '@RPSGame/models/character';
import { RickAndMortyService } from '@services/rick-and-morty.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
})
export class PersonajeComponent implements OnInit {
  id!: number;
  character?: Character;
  episodiosProcesados: Episode[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((pm) => pm.get('id')),
        filter((id): id is string => !!id),
        map((id) => Number(id))
      )
      .subscribe((id) => {
        this.id = id;
        this.mostrarUnPersonaje();
      });
  }

  procesarValor(valor: string) {
    if (Number(valor) != this.id) {
      this.router.navigate(['/personaje', valor]);
    }
  }

  mostrarUnPersonaje() {
    this.rickAndMortyService.getOneCharacter(this.id).subscribe({
      next: (data) => {
        this.character = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  traerEpisodio(url: string) {
    if (!this.episodiosProcesados.some(ep => ep.url === url)){
      this.rickAndMortyService.getEpisode(url)
        .subscribe({
          next: data => {
            this.episodiosProcesados.push(data);
          },
          error: error => {
            console.log(error);
          }
        });
    }
  }
}
