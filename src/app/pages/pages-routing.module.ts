import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    
    // {
    //   path: 'Home',
    //   component: HomeComponent,
    // },
    // {
    //   path: 'company',
    //   loadChildren: () => import('./company/company.module')
    //     .then(m => m.CompanyModule),
    // },
 
    // {
    //   path: 'billing',
    //   loadChildren: () => import('./billing/billing.module')
    //     .then(m => m.BillingModule),
    // },
    // {
    //   path: 'location',
    //   loadChildren: () => import('./location/location.module')
    //     .then(m => m.LocationModule),
    // },
    // {
    //   path: 'practice',
    //   loadChildren: () => import('./practice/practice.module')
    //     .then(m => m.PracticeModule),
    // },
    // {
    //   path: 'orders',
    //   loadChildren: () => import('./orders/orders.module')
    //     .then(m => m.OrdersModule),
    // },
    // {
    //   path: 'patients',
    //   loadChildren: () => import('./patient/patient.module')
    //     .then(m => m.PatientModule),
    // },
    // {
    //   path: 'clients',
    //   loadChildren: () => import('./clients/clients.module')
    //     .then(m => m.ClientModule),
    // },
    // {
    //   path: 'doctors',
    //   loadChildren: () => import('./doctors/doctors.module')
    //     .then(m => m.DoctorsModule),
    // },
    // {
    //   path: 'settings',
    //   loadChildren: () => import('./settings/settings.module')
    //     .then(m => m.SettingsModule),
    // },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    // {
    //   path: 'charts',
    //   loadChildren: () => import('./charts/charts.module')
    //     .then(m => m.ChartsModule),
    // },
    // {
    //   path: 'inbox',
    //   loadChildren: () => import('./inbox/inbox.module')
    //     .then(m => m.InboxModule),
    // },
    // {
    //   path: 'workbench',
    //   loadChildren: () => import('./workbench/workbench.module')
    //     .then(m => m.WorkbenchModule),
    // },
    // {
    //   path: 'welcome',
    //   loadChildren: () => import('./welcome/welcome.module')
    //     .then(m => m.WelcomeModule),
    // },
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
