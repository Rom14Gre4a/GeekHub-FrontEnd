import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NbDialogRef, NbIconConfig, NbToastrService } from '@nebular/theme';
import { finalize } from 'rxjs/operators';
import { UpdateOrderStatusModel, OrderServiceProxy, NewStageModel } from '../../../../shared/service-proxies/event-service-proxy';
import { AuthenticationService } from '../../../@core/service';
import { ORDERSTATUSBYDOCTOR, ORDERSTATUS, STAGE } from '../status-order-list';

@Component({
  selector: 'ngx-new-stage-modal',
  templateUrl: './new-stage-modal.component.html',
  styleUrls: ['./new-stage-modal.component.scss']
})
export class NewStageModalComponent implements OnInit {

  @Input() order: any;
  user: any = {};
  note: any;
  stageDto: any[] =  [
    {key: 'surgical_guide', name: "Surgical guide", value: false },
    {key: 'special_tray', name: "Special tray", value: false },
    {key: 'bite_blocks', name: "Bite blocks", value: false },
    {key: 'try_in', name: "Try-in", value: false },
    {key: 'provisional', name: "Provisional", value: false },
    {key: 'final', name: "Final ", value: false },
]

  startStageString: any[] = [];
  newStageModelDto: NewStageModel = new NewStageModel();
  constructor(
    protected dialogRef: NbDialogRef<NewStageModalComponent>,
    private _authenticationService: AuthenticationService,
    private router: Router,
    private _orderService: OrderServiceProxy,
    private toastrService: NbToastrService
  ) {
    let currentUser = this._authenticationService.currentUserValue;
    let helper = new JwtHelperService();
    this.user = helper.decodeToken(currentUser.accessToken);
  }
  approve() {
    this.startStageString = this.stageDto.filter(f => f.value).map(x => {
      if (x.value) {
        return x.name;
      }
    });
    this.newStageModelDto.orderId = this.order.id;
    this.newStageModelDto.stage = this.startStageString.join(',');
    this._orderService.startNewStage(this.newStageModelDto).pipe(
      finalize(() => {

      }))
      .subscribe(
        (result) => {
          this.dialogRef.close(true);
          const iconConfig: NbIconConfig = { icon: 'success-toastr', pack: 'great-pack' };
          this.toastrService.success('', "Stages added", { icon:iconConfig});
        },
        (error: any) => {
          const iconConfig: NbIconConfig = { icon: 'danger-toastr', pack: 'great-pack' };
          this.toastrService.danger('',error.message, { icon:iconConfig}); 
        }
      )
  }
  decline() {
    this.dialogRef.close({ result: false, routeTo: null });
  }
  ngOnInit(): void {



  }
  checkIsNaNchecklist() {
    let result = true;
    if (this.stageDto.filter(x => x.value).length !== 0) {
      result = false;
    }
    return result
  }
  routeToOrderEdit(order: any) {
    this.dialogRef.close(true);
  }
}

