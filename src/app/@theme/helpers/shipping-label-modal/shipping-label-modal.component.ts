// import { Component, Input, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { NbDialogRef, NbIconConfig, NbToastrService } from '@nebular/theme';
// import { finalize } from 'rxjs/operators';
// import {   Carrier, OrderServiceProxy, ShipmentLabelResponse, ShipmentServiceProxy } from '../../../../shared/service-proxies/event-service-proxy';

// @Component({
//   selector: 'ngx-shipping-label-modal',
//   templateUrl: './shipping-label-modal.component.html',
//   styleUrls: ['./shipping-label-modal.component.scss']
// })
// export class ShippingLabelModalComponent implements OnInit {
//   @Input() order: any;
//   carrierDtoList: any;
//   carrierId: any;
//   serviceId: any;
//   servicesList: any[] = [];
//   isCarrierLoading: boolean = false;
//   isServiceLoading: boolean = false;
//   form: FormGroup;

  
  
//   constructor(
//     protected dialogRef: NbDialogRef<ShippingLabelModalComponent>,
//     private formBuilder: FormBuilder,
//     private _orderService: OrderServiceProxy,
//     private toastrService: NbToastrService,
//     private _shipmentService: ShipmentServiceProxy,
//   ) { }
//   approve() {
//     this.dialogRef.close(true);
//   }
//   decline() {
//     this.dialogRef.close(false);
//   }

//   ngOnInit(): void {


//     this.form = this.formBuilder.group({
//       carrier: [null,  Validators.required],
//       service: [null, [Validators.required, ]],
//     });


//     this.isCarrierLoading = true;
//     // console.log(this.order.locationId) 
//     // this._shipmentService.carriers(this.order.locationId).pipe(
//     //   finalize(() => {
//     //     this.isCarrierLoading = false;
//     //   }))
//     //   .subscribe(
//     //     (result: Carrier[]) => {
//     //       this.carrierDtoList = result;
//     //       console.log(result, 'ShipmentLabelResponse')
//     //     },
//     //     (error: any) => { 
//     //       const iconConfig: NbIconConfig = { icon: 'danger-toastr', pack: 'great-pack' };
//     //       this.toastrService.danger('',error.message, { icon:iconConfig}); 
//     //       this.dialogRef.close(false);
//     //     }
//     //   )
    
//   }


//   onChangeCarriers() {
//     this.isServiceLoading = true;
//     this.servicesList = this.carrierDtoList.find(x => x.carrierId == this.carrierId).services;
//     this.isServiceLoading = false;
//   }



//   onSubmit() {
//     if (this.form.valid) {
//       this._orderService.shipmentLabel(this.order.id, this.serviceId).pipe(
//         finalize(() => {
//         }))
//         .subscribe(
//           (result) => {
//             this.toastrService.success('Shipment Label successfully added', 'Success!')
//           },
//           (error: any) => {
//             this.toastrService.danger(error.message, 'Error!');
//            }
//         )
   
//     } else {
//       this.validateAllFormFields(this.form);
//     }
//   }
//   isFieldValid(field: string) {
//     return !this.form.get(field).valid && this.form.get(field).touched;
//   }
  
//   displayFieldCss(field: string) {
//     return {
//       'has-error': this.isFieldValid(field),
//       'has-feedback': this.isFieldValid(field)
//     };
//   }
//   validateAllFormFields(formGroup: FormGroup) {
//     Object.keys(formGroup.controls).forEach(field => {
//       const control = formGroup.get(field);
//       if (control instanceof FormControl) {
//         control.markAsTouched({ onlySelf: true });
//       } else if (control instanceof FormGroup) {
//         this.validateAllFormFields(control);
//       }
//     });
//   }

// }









