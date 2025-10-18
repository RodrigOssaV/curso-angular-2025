import { Component, OnInit } from '@angular/core';
import { Origin } from '@RPSGame/models/character';
import { RickAndMortyService } from '@services/rick-and-morty.service';

@Component({
  selector: 'app-origenes',
  templateUrl: './origenes.component.html',
  styleUrls: ['./origenes.component.css']
})
export class OrigenesComponent implements OnInit {

  origenes: Origin[] = [];

  constructor(private rickAndMortyService: RickAndMortyService){}

  ngOnInit(): void {
    this.rickAndMortyService.getOrigenes()
      .subscribe({
        next: (data) => {
          this.origenes = data;
        }
      })
  }
}
