import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TreatmentInstructionsComponent } from '../treatment-instructions.component';

@Component({
  selector: 'ngx-treatment-teeth-with-pins',
  templateUrl: './teeth-with-pins.component.html',
  styleUrls: ['../treatment-instructions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreatmentTeethWithPinsComponent extends TreatmentInstructionsComponent {

  @Input() selectedUpper: any;
  @Input() selectedLower: any;
  // @Input() selectedUpperLabels: any;
  // @Input() selectedLowerLabels: any;
  @Input() teeth: any
  @Output() notationsChange = new EventEmitter<any>();
  @Input() selectedNotation: number;



  constructor(dialog : NbDialogService) {
    super(dialog);
  }

  ngOnInit(): void {
  }
  teethTypeStatus() {}
  selectTeeth() {}
}
