
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({name: 'ngxFilterOrderType'})


// export enum materialTypeCorrectName {
//   ZirconiumSuperEsteticMultilayer = <any>"Zr Superestetic",
//   ZirconiaAnatomicMultilayer = <any>"Zr Monolithic",
//   EmaxLayeredPorcelain = <any>"Emax",
//   PorcelainFusedOnSinteredMetal = <any>"PFM",
//   CompositeWithMetalSupport = <any>"Metal Composite", 
//   Composite = <any>"Composite",
//   FullCast = <any>"Full Cast",

// }

export class FilterOrderTypePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  
  public transform(value: any,menu?:any,retention?:any ,material?:any, type?: any): any {
      if (type == 'retention') {
        if (menu == 'Maryland' || menu == 'Veneer' || menu == 'InlayOnlay') {
          return value.filter(x => x.value == 'NotAnImplant');
        }
      }
    if (type == 'material') {
      if ((menu == 'Crown' || menu == 'Bridge') && retention == 'NotAnImplant') {
        return value.filter(el => el.value !== 'Composite')
      } else if ((menu == 'Crown' || menu == 'Bridge') && retention !== 'NotAnImplant') {
        return value.filter(el => el.value == 'ZirconiumSuperEsteticMultilayer' || el.value == 'PorcelainFusedOnSinteredMetal' || 
        el.value == 'CompositeWithMetalSupport' )
      } else if (menu == 'Maryland' && retention == 'NotAnImplant') {
        return value.filter(el => el.value == 'ZirconiumSuperEsteticMultilayer' || el.value == 'PorcelainFusedOnSinteredMetal' || 
        el.value == 'CompositeWithMetalSupport' )
      } else if ((menu == 'Veneer' || menu == 'InlayOnlay') && retention == 'NotAnImplant') {
        return value.filter(el => el.value == 'ZirconiumSuperEsteticMultilayer' || 
        el.value == 'Composite' || el.value == 'EmaxLayeredPorcelain')
      }
      
    } else {
      return value
    }
    return value

  }



}


   // (menu == "Veneer_Inlay_Onlay"
      // || orderModel.crownBridgeImplant[0].restorationType == "Maryland")) {
      //  this.retentionTypes.map(el => {
      //    if (el.value == RetentionType.Screw_retained 
      //      || el.value == RetentionType.Cement_retained 
      //      || el.value == RetentionType.Screwmentable)  {
      //      el.isHide = false;
      //      return el
      //    }
      //  })




      // if (orderModel.typeId == 4 && 
      //   (orderModel.crownBridgeImplant[0].restorationType == "Crown" || 
      //   orderModel.crownBridgeImplant[0].restorationType == "Bridge") &&
      //   orderModel.crownBridgeImplant[0].retentionType != "NotAnImplant") {
      //      this.crownMaterials.map(el => {
      //         if (el.value == CrownMaterial.ZirconiaAnatomicMultilayer ||  el.value == CrownMaterial.EmaxLayeredPorcelain || el.value == CrownMaterial.Composite || el.value == CrownMaterial.FullCast) {
      //           el.isHide = false;
      //           return el
      //         }
      //       })
      //   }


  //   if (orderModel.typeId == 4 && 
      //   orderModel.crownBridgeImplant[0].restorationType == "Maryland"  &&
      //   orderModel.crownBridgeImplant[0].retentionType == "NotAnImplant") {
      //     this.crownMaterials.map(el => {
      //       if (el.value == CrownMaterial.ZirconiaAnatomicMultilayer || el.value == CrownMaterial.EmaxLayeredPorcelain || el.value == CrownMaterial.Composite || el.value == CrownMaterial.FullCast) {
      //         el.isHide = false;
      //         return el
      //       }
      //     })
      //   }