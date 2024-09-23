
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'ngxCutText'})

export class CutTextPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}
  data: any[] = [];
  public transform(value: any, count: any): void {
    if (value) {
      return value.length > count ? `${value.substring(0, count)}...` : value;
    }

  }
}

