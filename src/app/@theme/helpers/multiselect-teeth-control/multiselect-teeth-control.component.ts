import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NbIconConfig, NbToastrService } from '@nebular/theme';
import { OrderServiceProxy } from '../../../../shared/service-proxies/event-service-proxy';

@Component({
  selector: 'ngx-multiselect-teeth-control',
  templateUrl: './multiselect-teeth-control.component.html',
  styleUrls: ['./multiselect-teeth-control.component.scss']
})
export class MultiselectTeethControlComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() teethType: any;
  @Input() product: any;
  @Input() isHideLegend?: any;
  @Input() productInfo: any = {data: null};
  @Input() colorSelectTeeth: any;
  @Input() isSingle?: any;


  countInValidTeethSelectedMAX: number = 6;
  countInValidTeethSelectedMIN: number = 3;
  bothArch: boolean = true;
















  @Output() outputSelectedTetth = new EventEmitter<any>();
  enableTeethSelect: boolean = true;
  teeth: any = {
    isTeeth11: {
      num: 11,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth12: {
      num: 12,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth13: {
      num: 13,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth14: {
      num: 14,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth15: {
      num: 15,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth16: {
      num: 16,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth17: {
      num: 17,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth18: {
      num: 18,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth21: {
      num: 21,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth22: {
      num: 22,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth23: {
      num: 23,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth24: {
      num: 24,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth25: {
      num: 25,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth26: {
      num: 26,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth27: {
      num: 27,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth28: {
      num: 28,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth48: {
      num: 48,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth47: {
      num: 47,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth46: {
      num: 46,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth45: {
      num: 45,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth44: {
      num: 44,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth43: {
      num: 43,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth42: {
      num: 42,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth41: {
      num: 41,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth31: {
      num: 31,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth32: {
      num: 32,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth33: {
      num: 33,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth34: {
      num: 34,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth35: {
      num: 35,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth36: {
      num: 36,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth37: {
      num: 37,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
    isTeeth38: {
      num: 38,
      typeStatus: 9999,
      value: false,
      typeRestoration: null
    },
  }

  constructor(
    private _orderService: OrderServiceProxy,
    private toastrService: NbToastrService,
    private detecChange: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // this.detecChange.detectChanges();
    
    this.ngOnInit()
  }




  ngOnInit(): void {
    if (this.isSingle) {
      this.showPrductsInSingleTeeth();
    } else {
      this.showPrductsInTeeth();
    }
 

  }

  showPrductsInSingleTeeth() {
    this.product.selectedTeeth.map((x, index) => {
      if (x) {
        let teethArr = x.split(',');
        teethArr.map(a => {
          this.teeth[`isTeeth${a}`].value = true;
          this.teeth[`isTeeth${a}`].typeStatus = index + 1;
          this.teeth[`isTeeth${a}`].typeRestoration = x.id; 
        })
      }
    })
    
  }

  showPrductsInTeeth() {
    this.data.orderProducts.map((x, index) => {
      if (x.teeth) {
        let teethArr = x.teeth.split(',');
        teethArr.map(a => {
          
          this.teeth[`isTeeth${a}`].value = true;
          this.teeth[`isTeeth${a}`].typeStatus = index + 1;
          this.teeth[`isTeeth${a}`].typeRestoration = x.id; 
        })
      }
    })
    
  }



  teethTypeStatus(teethEl: any) {
    if (this.teeth[teethEl].value) {
        return `color_${this.data.categoryId? this.data.categoryId : 1}`
    }
  }


  

  get allTeethSelected() {
    let result = []
    this.data.crownBridgeImplant.forEach(x => {
      result.push(x.teeth);
    })
    return result
  }



  selectTeeth(teethEl: any) {
    if (this.teeth[teethEl].typeRestoration !== null) {
      const iconConfig: NbIconConfig = { icon: 'danger-toastr', pack: 'great-pack' };
      this.toastrService.danger('', "This is teeth use in another product", { icon:iconConfig}); 
    } else {
      let typeStatusByColorTeeth = this.data.orderProducts.length + 1;
      this.teeth[teethEl].value = !this.teeth[teethEl].value;
      this.teeth[teethEl].typeStatus = typeStatusByColorTeeth;
      if (this.teeth[teethEl].value) {
        this.product.selectedTeeth.push(this.teeth[teethEl].num);
      } else {
        this.product.selectedTeeth = this.product.selectedTeeth.filter(x => x !== this.teeth[teethEl].num);
      }
     
      this.outputSelectedTetth.emit(this.product);
    }
  
  }

  checkIsOrderTypeTrue(type: any) {
    if (this.data.crownBridgeImplant.length > 0) {
      if (this.data.crownBridgeImplant.find(x => x.restorationType == type)) {
        return true;
      }
    }
  }

  isLower: boolean = false;
  isUpper: boolean = false;
  tmpData: any[] = []


  changeArches(type: any, event: any) {
    this[`${type}`] = event;
    if (this[`${type}`] == true) {
      this.tmpData.push(type);
    } else {
      this.tmpData = this.tmpData.filter(x => x !== type);
    }
    this.tmpData.join(',');
    this.product.arch = this.tmpData.toString();
    this.product.selectedTeeth = this.tmpData;
    this.outputSelectedTetth.emit(this.product);
  }

  // teethInSingle() {
   
  //   return tmpData;
  // }
}
