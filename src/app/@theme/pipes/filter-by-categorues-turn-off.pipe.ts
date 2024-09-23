
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'ngxfilterByCategoruesTurnOff' })


export class FilterByCategoruesTurnOffPipe implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) { }

    transform(value: any, args?: any): any {
      let result  = value.filter(item =>
       args.includes(item.categoryId.toString())
      );
        return result;
      }
}

