import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialBasicsComponent } from './material-basics/material-basics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



//material apis
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MCardsComponent } from './m-cards/m-cards.component';
//autocomplete
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
//left nav
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './left-nav/dashboard/dashboard.component';
import { InboxComponent } from './left-nav/inbox/inbox.component';
import { SettingsComponent } from './left-nav/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialBasicsComponent,
    PageNotFoundComponent,
    MCardsComponent,
    AutoCompleteComponent,
    LeftNavComponent,
    DashboardComponent,
    InboxComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    //material apis
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    //autocomplete
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    //left nav
    MatSidenavModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
