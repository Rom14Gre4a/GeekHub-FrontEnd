import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { finalize } from 'rxjs/operators';
import { FileParameter, OrderFileModel, OrderServiceProxy, ResultMessage, UploadOrderFileResponseModel } from '../../../../shared/service-proxies/event-service-proxy';

@Component({
  selector: 'ngx-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit, OnChanges {
    @Input() order: any;
  @Input() fields: any;
  @Output() updateFileEvent = new EventEmitter<any>();
  isLoading: boolean = false;
  orderFile: FileParameter = { data: null, fileName: null };
  oorderFileData: File;
  files: string[] = [];
  specificData: any[] = [];
  currentFile: string = null;

  uploadedFiles: any[] = [];

  constructor(
    private _orderService: OrderServiceProxy,
    private toasrtService: NbToastrService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.specificData = [
      {
        type: 9,
        isUploading: false,
        name: 'Batch',
        value: null,
        icon: null
      },

    ]
    this.specificData.map(obj => {
      if (this.order.orderFiles && this.order.orderFiles?.find(x => x.typeId == obj.type)) {
        obj.value = this.order.orderFiles?.find(x => x.typeId == obj.type).url;
        return obj;
      }
    })
    this.uploadedFiles = this.order.orderFiles?.filter(element => element.typeId == this.fields);

  }

  getNameFile(name: any) {
    var nameArray = name.split('/');
    var name = nameArray[nameArray.length - 1];
    return name
  }
  getTypeName(type: number) {
    switch (type) {
      case 9:
        return "Batch";

    }
  }

  orderFileUpload(files: FileList, type: number) {
    this.isLoading = true;
    Array.from(files).forEach(element => {
      this.orderFile.data = element;
      this.orderFile.fileName = element.name ?? "";
      if (true) {
        this._orderService.uploadOrderFile
          (this.orderFile, this.order.id)
          .subscribe(
            (resp: UploadOrderFileResponseModel) => {
              this._orderService.addUploadedFileToOrder('00000000-0000-0000-0000-000000000000', this.order.id,type, resp.url, "").pipe(
                finalize(() => {
                  this.isLoading = false;
                }))
              .subscribe(
                (result: OrderFileModel) => { 
                  this.order.orderFiles?.push(result);
                },
                (error: any) => {
                  this.toasrtService.danger(error.message, "Error!");
                }
              )
            },
            (error) => {
              this.toasrtService.danger(error.message, "Error!");
            }
          );
      } else {
        this.toasrtService.danger('Inccorect STL format', 'Warning')
      }



    });



  }




  deleteFile(fileItem: any) {
    this.isLoading = true;
    this._orderService.removeOrderFile(fileItem).pipe(
      finalize(() => {
        this.isLoading = false;
      }))
    .subscribe(
      (result: ResultMessage) => { 
        if (result.result) {
          this.order.orderFiles = this.order.orderFiles.filter(x => x.id !== fileItem);
        } else [
          this.toasrtService.danger(result.message, 'Error!')
        ]
      },
      (error: any) => {}
    )
  }

  ngOnChanges(changes: SimpleChanges) {
   
  }
}
