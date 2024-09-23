import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-order-sumbit-order-modal',
  templateUrl: './order-sumbit-order-modal.component.html',
  styleUrls: ['./order-sumbit-order-modal.component.scss']
})
export class OrderSumbitOrderModalComponent implements OnInit {
  @Input() title: any;
  constructor(
    protected dialogRef: NbDialogRef<OrderSumbitOrderModalComponent>,
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
