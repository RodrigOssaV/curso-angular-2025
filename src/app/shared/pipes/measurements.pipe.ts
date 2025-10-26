import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measurements'
})
export class MeasurementsPipe implements PipeTransform {

  transform(value: number | undefined, unit: 'hg-to-kg' | 'dm-to-cm'): number | null {
    if (value === null || value === undefined || isNaN(value)) {
      return null;
    }

    switch (unit) {
      case 'hg-to-kg':
        // 1 hectogramo = 0.1 kilogramos
        return value * 0.1;

      case 'dm-to-cm':
        // 1 decímetro = 10 centímetros
        return value * 10;

      default:
        return value;
    }
  }

}
