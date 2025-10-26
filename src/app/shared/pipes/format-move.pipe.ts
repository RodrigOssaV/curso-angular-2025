import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMove',
})
export class FormatMovePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    // Reemplaza '-' por espacios y capitaliza cada palabra
    return value
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
