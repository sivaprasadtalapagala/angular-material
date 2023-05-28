import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { DashboardComponent } from './left-nav/dashboard/dashboard.component';
import { InboxComponent } from './left-nav/inbox/inbox.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { SettingsComponent } from './left-nav/settings/settings.component';
import { MCardsComponent } from './m-cards/m-cards.component';
import { MaterialBasicsComponent } from './material-basics/material-basics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'basics', pathMatch: 'full' },
  {path:'basics',component:MaterialBasicsComponent},
  {path:'cards',component:MCardsComponent},
  {path:'autocomplete',component:AutoCompleteComponent},
  {path:'leftnav',component:LeftNavComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // {
    //   path: '',
    //   component: LeftNavComponent,
    //   outlet: 'sidebar'
    // },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'inbox',
      component: InboxComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    }
  ]},
  {path:'**', component:PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
