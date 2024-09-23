import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'addSpace' })
export class AddSpacePipe implements PipeTransform {
  transform(value: string): string {
    // Add space before each uppercase letter
    return value.replace(/([A-Z])/g, ' $1').trim();
  }
}