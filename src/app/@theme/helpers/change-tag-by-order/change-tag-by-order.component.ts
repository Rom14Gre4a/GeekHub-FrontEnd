import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { finalize } from 'rxjs/operators';
import { AddOrderTagModel, LocationServiceProxy, LocationsTagListModel, OrderDetailModel, OrderServiceProxy } from '../../../../shared/service-proxies/event-service-proxy';
import { ORDERTAGLIST } from '../status-order-list';

@Component({
  selector: 'ngx-change-tag-by-order',
  templateUrl: './change-tag-by-order.component.html',
  styleUrls: ['./change-tag-by-order.component.scss']
})
export class ChangeTagByOrderComponent implements OnInit {
  @Input() order: any;
  @Input() isDelete: boolean;
  isloader: boolean = false;
  orderTagDto: AddOrderTagModel = new AddOrderTagModel();
  tagsList: LocationsTagListModel[] = [ ];
  constructor(
    protected dialogRef: NbDialogRef<ChangeTagByOrderComponent>,
    private _orderSerice: OrderServiceProxy,
    private _locationService: LocationServiceProxy
  ) { }
  
  decline() {
    this.dialogRef.close(false);
  }
    
  save() {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
    this.orderTagDto.orderId = this.order.id; 
    this._locationService.getTagsListByLocationId(this.order.locationId).pipe(
      finalize(() => {
      }))
    .subscribe(
      (result) => { 
        this.tagsList = result;
      },
      (error: any) => {}
    )
  }

  removeTag(tag: any) {
    this.isloader = true;
    this._orderSerice.removeTag(tag.id).pipe(
      finalize(() => {
        this.isloader = false;
      }))
    .subscribe(
      (result) => { 
        this.order.tags =  this.order.tags.filter(x => x.id !== tag.id);
      },
      (error: any) => {}
    )
  }

  changeTag() {
    this.isloader = true;
    this._orderSerice.addTag(this.orderTagDto).pipe(
      finalize(() => {
        this.isloader = false;
      }))
    .subscribe(
      (result) => { 
        this.dialogRef.close(true);
    
      },
      (error: any) => {}
    )
  }
}