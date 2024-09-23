import { Component, Input, OnInit } from '@angular/core';
import { getEnumKeyByVal, UniversalToFDISpaces, PalmerToFDINotation } from '../../../@core/models/notations';

@Component({
  selector: 'ngx-dentist-instructions',
  templateUrl: './dentist-instructions.component.html',
  styleUrls: ['./dentist-instructions.component.scss']
})
export class DentistInstructionsComponent implements OnInit {


  @Input() teeth: any;
  @Input() instructions: any[];
  @Input() selectedNotation: number;

  selectedExtractions: any[] = [];
  selectedAttachments: any[] = [];
  selectedSpaces: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.selectedAttachments = this.instructions.filter(x=>x.treatmentInstructionType == "Attachments");
    this.selectedExtractions = this.instructions.filter(x=>x.treatmentInstructionType == "Extractions");
    this.selectedSpaces = this.instructions.filter(x=>x.treatmentInstructionType == "IPR");
    this.selectedAttachments, ' this.selectedAttachments',
    this.selectedExtractions, 'selectedExtractions',
    this.selectedSpaces, 'selectedSpaces'
    
    
  }

  amount(space: any): any{

    var res = this.selectedSpaces.filter(x => x.toothNumber == getEnumKeyByVal(UniversalToFDISpaces,space))[0];
    return res ? res.amount : "";
  }



  beforeStep(space: any): any{
    var res = this.selectedSpaces.filter(x => x.toothNumber == getEnumKeyByVal(UniversalToFDISpaces,space))[0];
    return res? "< " + res.beforeStep : "";
    
  }

  isSpaceChecked(palmer: string) {
    

    if (palmer.includes('_') && Number.parseInt(palmer.substring(0, palmer.indexOf('_'))) <= 15) {
    
      var res = this.selectedSpaces.some(x => x.toothNumber == getEnumKeyByVal(UniversalToFDISpaces,palmer));
      return res;
    }
    else if (palmer.includes('_') && Number.parseInt(palmer.substring(0, palmer.indexOf('_'))) > 15) {
      
      var res = this.selectedSpaces.some(x => x.toothNumber == getEnumKeyByVal(UniversalToFDISpaces,palmer));
      return res;
      
    }
    return false;
  }
  isExtractionChecked(universalNumber: number) {
    if (universalNumber <= 16) {
      return this.selectedExtractions.some(x => x.toothNumber == PalmerToFDINotation[universalNumber]);
    }
    else if (universalNumber > 16) {
      return this.selectedExtractions.some(x => x.toothNumber == PalmerToFDINotation[universalNumber]);
    }
    return false;
  }
  isAttachmentChecked(universalNumber: number) {
    if (universalNumber <= 16) {
      return this.selectedAttachments.some(x => x.toothNumber == PalmerToFDINotation[universalNumber]);
    }
    else if (universalNumber > 16) {
      return this.selectedAttachments.some(x => x.toothNumber == PalmerToFDINotation[universalNumber]);
    }
    return false;

  }
  


}
