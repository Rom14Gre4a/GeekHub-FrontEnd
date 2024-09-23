import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], propertyName: string): any[] {
    return array.sort((a, b) => {
        return a[propertyName] - b[propertyName];
      });
  }
}
