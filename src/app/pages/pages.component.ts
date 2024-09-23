import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { AuthenticationService } from '../@core/service';
// import { AuthServiceProxy, UserDetailsIntecom } from '../../shared/service-proxies/event-service-proxy';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-main-layout>
      <router-outlet></router-outlet>
    </ngx-main-layout>
  `,
})
export class PagesComponent implements OnInit {
  // userData: UserDetailsIntecom = new UserDetailsIntecom();
  constructor(
    // private _authenticationService: AuthenticationService,
    // private _authService: AuthServiceProxy

  ) {
    // let currentUser = this._authenticationService.currentUserValue;
    // let helper = new JwtHelperService();
    // this.user = helper.decodeToken(currentUser.accessToken);
  }

  user: any = {};
  ngOnInit(): void {
  }
  
}
