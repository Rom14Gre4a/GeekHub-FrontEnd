
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({name: 'ngxFilter'})


export class FilterPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  
  public transform(value: any, filed: any, status: any): any {
    console.log(status, 'dsds');
    
    if (!status) {
      return value
    } else {
      let data = value.filter(x => x[filed] == status);
      console.log(data);
      
      return data
    }

}
}

 