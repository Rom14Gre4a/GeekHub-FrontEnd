import { NbDialogService } from '@nebular/theme';
import { TreatmentInstructionsComponent } from './../treatment-instructions.component';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'ngx-treatment-teeth-without-pins',
  templateUrl: './teeth-without-pins.component.html',
  styleUrls: ['../treatment-instructions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreatmentTeethWithoutPinsComponent extends TreatmentInstructionsComponent {

  @Input() selectedUpper: any;
  @Input() selectedLower: any;
  // @Input() selectedUpperLabels: any;
  // @Input() selectedLowerLabels: any;
  @Input() teeth: any;
  @Input() selectedNotation: number;
  @Output() notationsChange = new EventEmitter<any>();

  // _selectedUpperLabels: any;

  constructor(dialog: NbDialogService ) {
    super(dialog)
    // this._selectedUpperLabels = this.selectedUpperLabels;
  }

  ngOnInit(): void {

  }

}
