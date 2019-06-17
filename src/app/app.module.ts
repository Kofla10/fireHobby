import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//material
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//router
import {Routing} from './app.routes'


import { AppComponent } from './app.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { HomeComponent } from './components/home/home.component';
import { ViewFormComponent } from './components/view-form/view-form.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    HomeComponent,
    ViewFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CdkTableModule,
    Routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
