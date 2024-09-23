
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({name: 'ngxFilterProduct'})


export class FilterProductPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  
  public transform(value: any, filed: any, status: any): any {
    if (!status) {
      return value
    } else {
      let data = value.filter(x => x.isHide !== status);
      return data
    }

}
}

 