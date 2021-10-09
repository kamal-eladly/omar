import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddEmployeesComponent,
    ListEmployeesComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
