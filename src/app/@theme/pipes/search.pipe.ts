
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'ngxSearchPipe' })


export class SeatchPipe implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) { }

    transform(value: any, args?: any): any {
        if (!args) {
          return value;
        }


        const nameMatches = value.filter((val) => {
          return val.name?.toLowerCase().includes(args?.toLowerCase());
        });
        
        // Filter items based on other labels
        const otherMatches = value.filter((val) => {
          return !val.name?.toLowerCase().includes(args?.toLowerCase()) &&
                 (val.sku?.toLowerCase().includes(args?.toLowerCase()) ||
                  val.subcategoryName?.toLowerCase().includes(args.toLowerCase()) ||
                  val.standardTierName?.toLowerCase().includes(args.toLowerCase()) ||
                  val.materialName?.toLowerCase().includes(args.toLowerCase()) ||
                  val.categoryName?.toLowerCase().includes(args.toLowerCase()));
        });
        
        // Concatenate the results, with name matches first
        const filteredResults = nameMatches.concat(otherMatches);
        
        // Output the filtered results

        return filteredResults;

        // return value.filter((val) => {
        //   if (val.name?.toLowerCase().includes(args?.toLowerCase())) {
        //     return true; 
        //   }
        //   if (val.categoryName?.toLowerCase().includes(args?.toLowerCase())) {
        //     return true; 
        //   }
        //   let rVal = (val.sku?.toLowerCase().includes(args?.toLowerCase())) || 
        //              (val.subcategoryName?.toLowerCase().includes(args.toLowerCase())) ||
        //              (val.standardTierName?.toLowerCase().includes(args.toLowerCase())) ||
        //              (val.materialName?.toLowerCase().includes(args.toLowerCase())) ||
        //              (val.categoryName?.toLowerCase().includes(args.toLowerCase()));
        
        //   return rVal;
        // });
        // value.filter((val) => {
        //   let rVal = (val.sku?.toLowerCase().includes(args?.toLowerCase())) || (val.name.toLowerCase().includes(args.toLowerCase())) 
        //   || (val.subcategoryName?.toLowerCase().includes(args.toLowerCase()))   || (val.standardTierName?.toLowerCase().includes(args.toLowerCase())) 
        //   || (val.materialName?.toLowerCase().includes(args.toLowerCase())) || (val.categoryName?.toLowerCase().includes(args.toLowerCase()))
        //   return rVal;
        // })
    
      }
}

