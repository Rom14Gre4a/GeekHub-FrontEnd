import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import html2canvas from 'html2canvas'
import { finalize } from 'rxjs/operators';
import { OrderDetailModel, OrderServiceProxy } from '../../../../shared/service-proxies/event-service-proxy';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'ngx-sticker-bar-code',
  templateUrl: './sticker-bar-code.component.html',
  styleUrls: ['./sticker-bar-code.component.scss']
})
export class StickerBarCodeComponent implements OnInit {

  allowAllSettingToAllPrint: boolean = false;
  toggleCardStatus: boolean = false;



  @Input() orderId: any;
  isLandscape: boolean = true;
  orderDto: OrderDetailModel = new OrderDetailModel();
  constructor(
    public _orderService: OrderServiceProxy,
    private datePipe: DatePipe,
    protected dialogRef: NbDialogRef<StickerBarCodeComponent>,
    private chd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getConfigSettings();
    this.isLandscape = JSON.parse(localStorage.getItem('printLandscape'));
    this._orderService.getDetailsById(this.orderId).pipe(
      finalize(() => {
      }))
    .subscribe(
      (result) => { 
        this.orderDto = result;
        
      },
      (error: any) => {}
    )

  }

  removeVariables(item: any) {
    this.stickerBarConfig.variableArr = this.stickerBarConfig.variableArr.filter(x => x.id !== item.id);
  }


  decline() {
    this.dialogRef.close(false);
  }

 


  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('downloadLink', { static: false }) downloadLink: ElementRef;

  submit() {
    html2canvas(document.getElementById('qrcode'), { useCORS: true, scale: 10,  imageTimeout: 0 })
      .then((canvas) => {
        // this.sticker.stickerImageBase64 = canvas.toDataURL("image/jpeg", 1.0).split(';base64,')[1];
        // this.sticker.printingId = this.data.id;
        // this.sticker.caseNumber = this.data.caseNumber.toString();

        // this.apiPrintingServiceProxy.uploadPrintingSticker(this.sticker)
        //   .subscribe((resp: XResp) => {

        //     if (resp.success) {
        //       this.apiPrintingServiceProxy.generatePrintingArchive(this.data.id)
        //         .subscribe((resp: XResp) => {
        //           if (resp.success) {

        //             this.isloader = false;
        //             this.ref.close(resp);
        //           }
        //           else{
        //             this.ref.close(resp);
        //           }
        //         })
        //     }
        //   })
      })
  }

  pageSizePrintConfig($event) {
    localStorage.setItem('printLandscape', $event);
  }

  download() {
    html2canvas(document.getElementById('qrcode'), {
      scrollY: -window.scrollY, scrollX: -window.scrollX, useCORS: true, scale: 10, imageTimeout: 0 })
      .then((canvas) => {
   this.downloadLink.nativeElement

        this.canvas.nativeElement.src = canvas.toDataURL('image/jpeg', 1.0);
        this.downloadLink.nativeElement.href = canvas.toDataURL('image/jpeg', 1.0);
      
        
        var html  =  '<img src="' + this.canvas.nativeElement.src + '" /></body></html>';
    
    var printWindow = window.open('', 'to_print', 'height=330,width=530');
    
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.close();

        // this.downloadLink.nativeElement.download = this.orderDto.code + '_sticker.png';
        // this.downloadLink.nativeElement.click();
          
        // this.ref.close(false);

      });
  }
  fontSizeArr: any[] = [
    5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,36,38,40
  ]

  stickerBarConfig: any = {
    variableArr: [],
    width: 200,
    height: 150,
    font: 12,
    widthbarcode: 2,
    heightbarcode: 70,
    landscape: true,
    applyAllSettings: false
  }

  saveConfigSticker() {
      this.stickerBarConfig.landscape = this.isLandscape;
      localStorage.setItem('sticker_config', JSON.stringify(this.stickerBarConfig));
      this.toggleCardStatus = !this.toggleCardStatus;
  }

  getConfigSettings() {
   let localSettings = JSON.parse(localStorage.getItem('sticker_config'));
    if (localSettings) {
      this.stickerBarConfig = localSettings;
    } else {
      this.stickerBarConfig.variableArr = this.variablesItems.filter(x => x.isDefault);
    }
  }

  variablesItems = [
    {
      type: 'none',
      name: 'Code',
      fieldLabel: 'code',
      status: 1,
      order: 1,
      isShow: false,
      id: 1,
      icon: '', 
      isDefault: false,
    },
    {
      type: 'none',
      name: 'Patient',
      fieldLabel: 'patientName',
      status: 1,
      order: 2,
      isShow: false,
      id: 2,
      icon: '', 
      isDefault: false,
    },
    {
      type: 'none',
      name: 'Status',
      fieldLabel: 'status',
      status: 1,
      order: 3,
      isShow: false,
      id: 3,
      icon: '', 
      isDefault: false,
    },
    {
      type: 'none',
      name: 'Practice',
      fieldLabel: 'practiceName',
      status: 1,
      order: 4,
      isShow: false,
      id: 4,
      icon: '', 
      isDefault: true,
    },
    {
      type: 'none',
      name: 'Doctor',
      fieldLabel: 'dentistName',
      status: 1,
      order: 3,
      isShow: false,
      id: 5,
      icon: '', 
      isDefault: true,
    },
    {
      type: 'none',
      name: 'Product Category',
      fieldLabel: 'category',
      status: 1,
      order: 6,
      isShow: false,
      id: 6,
      icon: '', 
      isDefault: true,
    },
    {
      type: 'date',
      name: 'Due Date',
      fieldLabel: 'deliveryDate',
      isShow: false,
      order: 7,
      id: 7,
      icon: '', 
      isDefault: true,
    },
    {
      type: 'date',
      name: 'Created',
      fieldLabel: 'createdAt',
      status: 1,
      order: 8,
      isShow: false,
      id: 8,
      icon: '', 
      isDefault: false,
    },
    {
      type: 'date',
      name: 'Submitted',
      fieldLabel: 'orderSubmittedDate',
      status: 1,
      order: 9,
      isShow: false,
      id: 9,
      icon: '', 
      isDefault: false,
    },
    {
      type: 'tags',
      name: 'Tags',
      fieldLabel: 'tags',
      status: 1,
      order: 10,
      isShow: false,
      id: 10,
      icon: '', 
      isDefault: false,
    },
    {
      type: 'date',
      name: 'Deadline',
      fieldLabel: 'deadlineDate',
      status: 1,
      order: 1,
      isShow: false,
      id: 11,
      icon: '', 
      isDefault: true,
    },
    {
      type: 'none',
      name: 'Pan Number',
      fieldLabel: 'panNumber',
      status: 1,
      order: 12,
      isShow: false,
      id: 12,
      icon: '', 
      isDefault: false,
    },
    {
      type: 'none',
      name: 'Delivery Route',
      fieldLabel: 'locationRoutName',
      status: 1,
      order: 13,
      isShow: false,
      id: 13,
      icon: '', 
      isDefault: true,
    }
  ];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      moveItemInArray(this.stickerBarConfig.variableArr, event.previousIndex, event.currentIndex);
      this.stickerBarConfig.variableArr.forEach((entity, index) => {
        entity.order   = index + 1;
      });


    } else {
      // transferArrayItem(event.previousContainer.data,
      //                   event.container.data,
      //                   event.previousIndex,
      //                   event.currentIndex);
    }
  }

  selectVariables(event: any) {
    if (!this.stickerBarConfig.variableArr.find(x => x.id == event)) {
      let item = this.variablesItems.find(x => x.id == event);
      this.variablesItems = this.variablesItems.map(x => {
        if (event == x.id) {
          x.isShow = true;
        }
        return x;
      });
      this.stickerBarConfig.variableArr.push(item);
    }
  }
  getCurrentValue(item: any) {
    let value;
    if (item.fieldLabel == 'status') {
      value = this.orderDto.status.name;
    } else if (item.fieldLabel == 'category') {
      value = this.orderDto.category.name;
    } else if (item.type == 'date') {
      const dateFormat = this.orderDto.dateFormat ? this.orderDto.dateFormat : 'dd/MM/YY';
      value = this.datePipe.transform(this.orderDto[`${item.fieldLabel}`], dateFormat);
    } else if (item.type == 'tags') {
      value = this.orderDto.tags.map(item => item.name).join(', ');
    } else {
      value = this.orderDto[`${item.fieldLabel}`];
    }
    return value
  }


}
