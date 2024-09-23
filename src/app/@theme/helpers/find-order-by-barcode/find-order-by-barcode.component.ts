import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef, NbIconConfig, NbToastrService } from '@nebular/theme';
import { finalize } from 'rxjs/operators';
import { OrderServiceProxy, ResultMessage } from '../../../../shared/service-proxies/event-service-proxy';

@Component({
  selector: 'ngx-find-order-by-barcode',
  templateUrl: './find-order-by-barcode.component.html',
  styleUrls: ['./find-order-by-barcode.component.scss']
})
export class FindOrderByBarcodeComponent implements OnInit {
  @ViewChild('search', {static: true}) searchElement: ElementRef;
  @Input() isSearchOrderByAutomations: boolean;
  searchParam: string = ""; 
  scanedQr: string = "";
  isLoader: boolean = false;
  orderId: any;
  constructor(
    private router: Router,
    private _orderSercice: OrderServiceProxy,
    private toastrService: NbToastrService,
    protected dialogRef: NbDialogRef<FindOrderByBarcodeComponent>,
  ) { }

  ngOnInit(): void {
    this.focus();
  }
  decline() {
    this.dialogRef.close(false);
  }
  focus() {
    if (!this.inputFocused) {
      this.searchElement.nativeElement.focus();
    }
  }

  public getSearchString(event?: any) {
    this.searchParam = event ? event.target.value.replace(this.scanedQr, '') : '';

 
    this.getQrList()

  }
  getQrList(): void {
    this.isLoader = true;
    this._orderSercice.findOrderByCode(this.searchParam).pipe(
      finalize(() => {
        this.isLoader = false;
      }))
    .subscribe(
      (resp: ResultMessage) => { 
        if (resp.result) {
          if (this.isSearchOrderByAutomations) {
            this.scanedQr = this.searchParam;
            this.orderId = resp.message;
          } else {
            this.scanedQr = this.searchParam;
            this.dialogRef.close(false);
            window.open(`/pages/orders/details/${resp.message}`, "_self");
          }
        } else {
          const iconConfig: NbIconConfig = { icon: 'danger-toastr', pack: 'great-pack' };
          this.toastrService.danger('', resp.message, { icon:iconConfig}); 
          this.scanedQr = null;
          this.searchParam = null;
        }
      },
      (error: any) => {}
    )
 
  }


  refreshCode() {
    this.searchParam = null;
    this.scanedQr  = null;
    this.searchElement.nativeElement.focus();
  }

  navigateTo(row: any) {
    this.dialogRef.close(false);
    window.open(`/pages/orders/details/${row}`, "_self");
  }
  inputFocused: boolean = false;

  onInputFocus() {
    this.inputFocused = true;
  }

  onInputBlur() {
    this.inputFocused = false;
  }
}
