import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule} from '@angular/material/select'; 
import {Component} from '@angular/core';
//import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Bar2Component } from './bar2/bar2.component';
import { BodyComponent } from './body/body.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NetflixComponent } from './netflix/netflix.component';
import { AmazonprimeComponent } from './amazonprime/amazonprime.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    Bar2Component,
    BodyComponent,
    DashboardComponent,
    NetflixComponent,
    AmazonprimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonToggleModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    IvyCarouselModule
   // MatFormFieldModule
  
   // MatButtonToggleGroup
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
