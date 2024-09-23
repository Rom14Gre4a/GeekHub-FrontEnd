import { NbDialogService } from '@nebular/theme';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IprInstructionModalComponent } from './ipr-instruction-modal/ipr-instruction-modal.component';
import { TreatmentPlanInstructionModel } from '../../../../shared/service-proxies/event-service-proxy';
import { UniversalToFDISpaces, PalmerToUniversalNotation, PalmerToFDINotation, UniversalToPalmerSpaces, PalmerSpacesToUniversal } from '../../../@core/models/notations';

@Component({
  selector: 'ngx-treatment-instructions',
  templateUrl: './treatment-instructions.component.html',
  styleUrls: ['./treatment-instructions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreatmentInstructionsComponent implements OnInit {

  @Input() teeth: any;
  @Input() notations: any[];
  @Output() notationsChange = new EventEmitter<any>();
  @Input() selectedNotation: number;

  selectedUpper: any[] = [];
  selectedLower: any[] = [];


  constructor(private dialog: NbDialogService) { }
  ngOnInit(): void {
      this.notations.filter(
      notation => notation.treatmentInstructionType == this.teeth.label)
      .forEach(element => {
        let selected = {
          tooth: element.toothNumber,
          amount: element.amount,
          beforeStep: element.beforeStep
        }

        if (
          (element.toothNumber.startsWith('U') || this.isUpperLeaveSpaceTeeth(element.toothNumber)) && !this.selectedUpper.includes(element.toothNumber)) {

          this.selectedUpper.push(selected)
        }
        else if ((element.toothNumber.startsWith('L') || this.isLowerLeaveSpaceTeeth(element.toothNumber)) && !this.selectedLower.includes(element.toothNumber)) {

          this.selectedLower.push(selected);
        }

      });
  }

  public getSelected() {
    return this.selectedUpper;
  }

  selectItem(event: any) {
    this.notationsChange.emit(event);
  }

  public clickItem(event) {

    
    try {
      let selectedItem = event.target.getAttribute('data-title');
      if (selectedItem) {
        const action = "update";
        let label = this.teeth.label;
        let type = this.teeth.type
        let beforeStep = "10";
        let amount = "0.3";
      
        let selected = {
          tooth: selectedItem,
          amount: amount,
          beforeStep: beforeStep
        };


        let event = {
          selectedItem,
          label,
          beforeStep,
          amount,
          action,
          type
        };

        if (this.isUpperLeaveSpaceTeeth(selectedItem) || this.isLowerLeaveSpaceTeeth(selectedItem)) {
          
          if (this.selectedUpper.some(x=>x.tooth==selected.tooth) || this.selectedLower.some(x=>x.tooth==selected.tooth)) {
            this.removeSelected(selected.tooth);
            return;
          }
          this.dialog.open(IprInstructionModalComponent,{
            context: {
              data: UniversalToFDISpaces[selected.tooth],
              }
            })
            .onClose.subscribe((respModal: any) => {
              if (respModal.result) {
                event.beforeStep = respModal.beforeStep
                event.amount = respModal.amount;
                selected.amount =respModal.amount
                selected.beforeStep = respModal.beforeStep;
              
                if ((selectedItem.startsWith('U') || this.isUpperLeaveSpaceTeeth(selectedItem)) && !this.selectedUpper.some(x=>x.tooth==selected.tooth)) {
                  this.selectedUpper.push(selected);
                  this.selectItem(event);

                }
                else if ((selectedItem.startsWith('L') || this.isLowerLeaveSpaceTeeth(selectedItem)) && !this.selectedLower.some(x=>x.tooth==selected.tooth)) {
                  this.selectedLower.push(selected);
                  this.selectItem(event);

                }
                else {
                  this.removeSelected(selected.tooth)
                }
              }
            });
        }
        else {
      
          if ((selectedItem.startsWith('U') || this.isUpperLeaveSpaceTeeth(selectedItem)) && !this.selectedUpper.some(x=>x.tooth==selected.tooth)) {
            this.selectedUpper.push(selected);
            this.selectItem(event);

          }
          else if ((selectedItem.startsWith('L') || this.isLowerLeaveSpaceTeeth(selectedItem)) && !this.selectedLower.some(x=>x.tooth==selected.tooth)) {
            this.selectedLower.push(selected);
            this.selectItem(event);

          }
          else {
            this.removeSelected(selected.tooth)
          }

        }
      }
    } catch (error) {

    }


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

  public removeSelected(selectedItem) {
    let label = this.teeth.label;
    let type = this.teeth.type
    const action = "delete";
    
    let event = {
      selectedItem,
      label,
      action,
      type
    };
    

    if (selectedItem.startsWith('U') || this.isUpperLeaveSpaceTeeth(selectedItem)) {
      const index = this.selectedUpper.findIndex(x=>x.tooth == selectedItem);
      this.selectedUpper.splice(index, 1);
      this.selectItem(event);
    } else if (selectedItem.startsWith('L') ||
      this.isLowerLeaveSpaceTeeth(selectedItem)
    ) {
      const index = this.selectedLower.findIndex(x=>x.tooth == selectedItem);
      this.selectedLower.splice(index, 1);
      this.selectItem(event);
    }
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

  convertToPalmer(universalNumber: number) {
    return PalmerToUniversalNotation[universalNumber];
  }

  convertToUniversal(palmer: string) {
    return PalmerToUniversalNotation[palmer];
  }

  convertToFDI(palmer: string) {
    return PalmerToFDINotation[palmer]
  }




  // public convertUniversalToPalmerSpaces(palmer: string) {

  //   return UniversalToPalmerSpaces[palmer];

  // }

  public mainConverterWithoutPins(element) {
    if (this.selectedNotation === 1) {
      return element
    } else if (this.selectedNotation === 2) {
      return this.convertToFDI(element)
    } else {
      return this.convertToUniversal(element)
    }
  }

  convertToFDIWithPins(palmer) {
    return UniversalToFDISpaces[palmer]
  }

  convertToPalmerWithPins(element) {
    return UniversalToPalmerSpaces[element]
  }

  convertToUniversalWithPins(element) {
    return PalmerSpacesToUniversal[element]
  }

  public mainConverterWithPins(element) {
    if (this.selectedNotation === 1) {
      return this.convertToPalmerWithPins(element)
    } else if (this.selectedNotation === 2) {
      return this.convertToFDIWithPins(element)
    } else {
      return element
    }
  }



  isTeethChecked(universalNumber: number) {
    if (universalNumber <= 16) {
      return this.selectedUpper.some(x => x.tooth == PalmerToUniversalNotation[universalNumber]);
    }
    else if (universalNumber > 16) {
      return this.selectedLower.some(x => x.tooth == PalmerToUniversalNotation[universalNumber]);
    }
    return false;

  }

  isSpaceChecked(palmer: string) {

    if (palmer.includes('_') && Number.parseInt(palmer.substring(0, palmer.indexOf('_'))) <= 15) {
      return this.selectedUpper.some(x => x.tooth == palmer);;

    }
    else if (palmer.includes('_') && Number.parseInt(palmer.substring(0, palmer.indexOf('_'))) > 15) {
      return this.selectedLower.some(x => x.tooth == palmer);
    }
    return false;
  }

}
