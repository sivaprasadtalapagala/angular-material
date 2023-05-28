import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialBasicsComponent } from './material-basics/material-basics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'basics', pathMatch: 'full' },
  {path:'basics',component:MaterialBasicsComponent},
  {path:'**', component:PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
