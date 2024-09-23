import {NbToastrService} from '@nebular/theme';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-teeth-control',
  templateUrl: './teeth-control.component.html',
  styleUrls: ['./teeth-control.component.scss']
})
export class TeethControlComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() teethType: any;
  @Input() teethData: any;
  @Output() updateTeethNotation = new EventEmitter<any>();

  selectedTeeth: any[] = [];
  teethOption: any;
  teeth: any = {
    isTeeth11: false,
    isTeeth12: false,
    isTeeth13: false,
    isTeeth14: false,
    isTeeth15: false,
    isTeeth16: false,
    isTeeth17: false,
    isTeeth18: false,
    isTeeth21: false,
    isTeeth22: false,
    isTeeth23: false,
    isTeeth24: false,
    isTeeth25: false,
    isTeeth26: false,
    isTeeth27: false,
    isTeeth28: false,
    isTeeth48: false,
    isTeeth47: false,
    isTeeth46: false,
    isTeeth45: false,
    isTeeth44: false,
    isTeeth43: false,
    isTeeth42: false,
    isTeeth41: false,
    isTeeth31: false,
    isTeeth32: false,
    isTeeth33: false,
    isTeeth34: false,
    isTeeth35: false,
    isTeeth36: false,
    isTeeth37: false,
    isTeeth38: false,
  }
  notationType = [
    {
      showPins: false,
      label: 'ExcludeForMovement',
      type: 1,
      header: 'Do not move these teeth',
      tooltip: 'bridges, ankylosed teeth, etc.',
    },
    {
      showPins: false,
      label: 'AvoidEngagers',
      type: 2,
      header: 'Avoid attachments',
      tooltip: 'facial restorations, etc.',
    },
    {
      showPins: false,
      label: 'ExtractedTeeth',
      type: 3,
      header: 'Teeth to be extracted',
      tooltip: null,
    },
    {
      showPins: true,
      label: 'LeaveSpaces',
      type: 4,
      header: 'Leave these spaces open',
      tooltip: null,
    },
  ];
  constructor(
    // private _orderService: OrdersServiceProxy,
    private toastrService: NbToastrService
  ) {
  }
  ngOnChanges() {
    this.ngOnInit();
  }
  ngOnInit(): void {


    this.teethOption = this.notationType.find(x => x.type == this.teethType);
    this.teethData.filter(
      notation => notation.label?.includes(this.teethOption.label)).forEach(element => {
        element.teeth?.forEach((t: string) => {
          if (
            (t.startsWith('U') || this.isUpperLeaveSpaceTeeth(t)) && !this.selectedTeeth.includes(t)) {
            this.selectedTeeth.push(t)
          }
          else if ((t.startsWith('L') || this.isLowerLeaveSpaceTeeth(t)) && !this.selectedTeeth.includes(t)) {
            this.selectedTeeth.push(t);
          }
        });
        this.convertTeethSpeceficatio();
      });


  }
  convertTeethSpeceficatio() {
    this.selectedTeeth.forEach(x => {
      let numTeeth = this.convertToFDI(x);
      this.teeth[`isTeeth${numTeeth}`] = true;
    })
  }
  updateTeethNotations(keys: any) {
    let result = {
      teeth: keys,
      teethType: this.teethType,
      orderData: this.data
    }
    this.updateTeethNotation.emit(result);
    // this._orderService.updateNotation(this.data.id, this.teethType, keys).subscribe(
    //   (resp) => {
    //     this.updateTeethNotation.emit(true);
    //   },
    //   (error) => { }
    // )
  }




  changeTeeth(key: any) {
    this.teeth[key] = !this.teeth[key];
    let keys = Object.keys(this.teeth).filter(k => this.teeth[k] === true);
    keys = keys.map(e => {
      e = this.reversConvertToFDI(e);
      return e;
    })
    this.updateTeethNotations(keys);
  }



  private isUpperLeaveSpaceTeeth(element: string) {
    if (
      element.includes('_') &&
      Number.parseInt(element.substring(0, element.indexOf('_'))) <= 15
    ) {
      return true;
    }
    return false;
  }

  private isLowerLeaveSpaceTeeth(element: string) {
    if (
      element.includes('_') &&
      Number.parseInt(element.substring(0, element.indexOf('_'))) > 15
    ) {
      return true;
    }
    return false;
  }
  convertToFDI(palmer: string) {
    return PalmerToFDINotation[palmer]
  }
  reversConvertToFDI(palmer: string) {
    return PalmerToFDINotationRevers[palmer]
  }
}
export enum PalmerToFDINotationRevers {
  isTeeth18 = '18',
  isTeeth17 = '17',
  isTeeth16 = '16',
  isTeeth15 = '15',
  isTeeth14 = '14',
  isTeeth13 = '13',
  isTeeth12 = '12',
  isTeeth11 = '11',
  isTeeth21 = '21',
  isTeeth22 = '22',
  isTeeth23 = '23',
  isTeeth24 = '24',
  isTeeth25 = '25',
  isTeeth26 = '25',
  isTeeth27 = '27',
  isTeeth28 = '28',
  isTeeth38 = '38',
  isTeeth37 = '37',
  isTeeth36 = '36',
  isTeeth35 = '35',
  isTeeth34 = '34',
  isTeeth33 = '33',
  isTeeth32 = '32',
  isTeeth31 = '31',
  isTeeth41 = '41',
  isTeeth42 = '42',
  isTeeth43 = '43',
  isTeeth44 = '44',
  isTeeth45 = '45',
  isTeeth46 = '46',
  isTeeth47 = '47',
  isTeeth48 = '48'
}
export enum PalmerToFDINotation {
  UR8 = 18,
  UR7 = 17,
  UR6 = 16,
  UR5 = 15,
  UR4 = 14,
  UR3 = 13,
  UR2 = 12,
  UR1 = 11,
  UL1 = 21,
  UL2 = 22,
  UL3 = 23,
  UL4 = 24,
  UL5 = 25,
  UL6 = 26,
  UL7 = 27,
  UL8 = 28,
  LL8 = 38,
  LL7 = 37,
  LL6 = 36,
  LL5 = 35,
  LL4 = 34,
  LL3 = 33,
  LL2 = 32,
  LL1 = 31,
  LR1 = 41,
  LR2 = 42,
  LR3 = 43,
  LR4 = 44,
  LR5 = 45,
  LR6 = 46,
  LR7 = 47,
  LR8 = 48,
}