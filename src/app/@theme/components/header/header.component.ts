import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { log } from 'console';
import { finalize } from 'rxjs/operators';
import { FindOrderByBarcodeComponent } from '../../helpers/find-order-by-barcode/find-order-by-barcode.component';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  user: any = {};
  constructor(
    private router: Router,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    // private _authenticationService: AuthenticationService,
    // private _orderService: OrderServiceProxy,
    // private _authService: AuthServiceProxy,
    // private signalrService: SignalrService
  ) {
  // let currentUser = this._authenticationService.currentUserValue;
  // this.user = helper.decodeToken(currentUser.accessToken);
  console.log(this.user, 'user');
  }
  async openChat() {
    (<any>window).Intercom('show');
  }

  logout() {
    // this._authenticationService.logout();
  }
countInbox: number = 0;
countInboxDoctor: number = 0;

ngOnInit() {
}

isWelocme: boolean = false;
// getWelocme() {
//   this._authService.isSHowWelcome().pipe(
//     finalize(() => {
//     }))
//     .subscribe(
//       (resp: boolean) => {
//           this.isWelocme = resp;
//       },
//       (error: any) => { }
//     )
// }

 


 
searchBar(event: any) {
  this.router.navigate(['/pages/orders'], {queryParams: {searchParam: event, page: 1}});
} 
 findOrder() {
   this.dialogService.open(FindOrderByBarcodeComponent, {context: {isSearchOrderByAutomations: false}})
     .onClose.subscribe((resp) => {
       if (resp) {
        
       }
     });
 }
}
