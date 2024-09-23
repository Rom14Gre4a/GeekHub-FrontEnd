import { Component } from "@angular/core";

@Component({
  selector: "ngx-auth-layout",
  styleUrls: ["./auth.layout.scss"],
  template: `
    <nb-layout class="login">
      <nb-layout-column class="p-0">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AuthLayoutComponent {}
