import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrls: ['./quantity-control.component.scss']
})
export class QuantityControlComponent implements OnInit {
  @Output() outPutVal = new EventEmitter<any>();
  @Input() data: any;

  plus() {
    this.data = this.data + 1;
    this.outPutVal.emit(this.data);
  }
  minus() {
    if (this.data != 0) {
      this.data = this.data - 1;
      this.outPutVal.emit(this.data);
    }

  }
  ngOnInit(): void {

  }
}
