import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeros',
})
export class ZerosPipe implements PipeTransform {
  transform(value: number | undefined, length: number = 4): string {
    if (value === null || value === undefined) return ''.padStart(length, '0');

    const str = String(value);
    const sign = str.startsWith('-') ? '-' : '';
    const unsigned = sign ? str.slice(1) : str;

    if (!/^\d+$/.test(unsigned)) {
      return sign + unsigned;
    }

    return sign + unsigned.padStart(length, '0');
  }
}
