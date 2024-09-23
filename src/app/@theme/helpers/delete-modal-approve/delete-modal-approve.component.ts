import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-delete-modal-approve',
  templateUrl: './delete-modal-approve.component.html',
  styleUrls: ['./delete-modal-approve.component.scss']
})
export class DeleteModalApproveComponent implements OnInit {
  @Input() title: string;
  @Input() btnText: string;
  @Input() headTitle: string;
  constructor(
    protected dialogRef: NbDialogRef<DeleteModalApproveComponent>,
  ) { }
  approve() {
    this.dialogRef.close(true);
  }
  decline() {
    this.dialogRef.close(false);
  }
  ngOnInit(): void {
  }

}
