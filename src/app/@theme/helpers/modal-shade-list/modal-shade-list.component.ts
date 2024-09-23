import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { getTeethShadeSystems} from '../../../@core/models/TeethShadeSystem ';

@Component({
  selector: 'ngx-modal-shade-list',
  templateUrl: './modal-shade-list.component.html',
  styleUrls: ['./modal-shade-list.component.scss']
})
export class ModalShadeListComponent implements OnInit {
  @Input() locationShade: number;
  @Input() selectedShadeGuide: number;
  selectedShadeSystem: number;
  teethShadeSystems: any;


  constructor(protected dialogRef: NbDialogRef<ModalShadeListComponent>) { }

  ngOnInit(): void {
    this.teethShadeSystems = getTeethShadeSystems();
    this.selectedShadeSystem = this.selectedShadeGuide;
  }

  cancel() {
    this.dialogRef.close(null);
  }

  confirm() {
    this.dialogRef.close(this.selectedShadeSystem);
  }
}
