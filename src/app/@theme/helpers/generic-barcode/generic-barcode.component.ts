import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { finalize } from 'rxjs/operators';

import { FindOrderByBarcodeComponent } from '../find-order-by-barcode/find-order-by-barcode.component';
@Component({
  selector: 'ngx-generic-barcode',
  templateUrl: './generic-barcode.component.html',
  styleUrls: ['./generic-barcode.component.scss']
})
export class GenericBarcodeComponent implements OnInit {
 
  @Input() code: any;
  @Input() isConfig: any;
  @Input() widthConf: any;
  @Input() heightConf: any;



  constructor(
  ) { }
  ngOnInit(): void {
    if (this.isConfig) {
      this.width = this.widthConf;
      this.height = this.heightConf;
    }

  }




  elementType = 'svg';
  value = 'someValue12340987';
  format = 'CODE128';
  lineColor = '#000000';
  width = 2;
  height = 70;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 2;
  fontSize = 20;
  background = '#ffffff';
  margin = 10;
  marginTop = 10;
  marginBottom = 10;
  marginLeft = 10;
  marginRight = 10;
  
  get values(): string[] {
    return this.value.split('\n');
  }
  codeList: string[] = [
    '', 'CODE128',
    'CODE128A', 'CODE128B', 'CODE128C',
    'UPC', 'EAN8', 'EAN5', 'EAN2',
    'CODE39',
    'ITF14',
    'MSI', 'MSI10', 'MSI11', 'MSI1010', 'MSI1110',
    'pharmacode',
    'codabar'
  ];

}
