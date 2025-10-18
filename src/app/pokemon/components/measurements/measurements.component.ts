import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '@pokemon/models/pokemon';

@Component({
  selector: 'app-pokemon-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnChanges{

  @Input() pokeMeasurements?: Pokemon;

  height: number = 0;
  weight: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if(this.pokeMeasurements){
      // console.log(this.pokeMeasurements);
      this.height = this.pokeMeasurements.height;
      this.weight = this.pokeMeasurements.weight;
    }
  }

}
