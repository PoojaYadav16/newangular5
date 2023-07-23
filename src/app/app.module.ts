import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
// import * as footerComponent from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';

import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { IndiaMapComponent } from './india-map/india-map.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ClgDetailsComponent } from './clg-details/clg-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { TransportationComponent } from './transportation/transportation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoComponent,
    CardsComponent,
    // footerComponent.FooterComponent,
    LoginComponent,
    ContactusComponent,
    AboutusComponent,
    HomeComponent,
    MainpageComponent,
    IndiaMapComponent,
    FooterComponent,
    ClgDetailsComponent,
    TransportationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
