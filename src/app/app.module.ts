import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatListModule, MatCheckboxModule, MatButtonModule, MatMenuModule,
         MatSelectModule, MatInputModule} from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SwgetComponent } from './components/swget/swget.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { FilmsComponent } from './components/API/films/films.component';
import { PlanetComponent } from './components/API/planet/planet.component';
import { SpeciesComponent } from './components/API/species/species.component';
import { StarshipComponent } from './components/API/starship/starship.component';
import { VehicleComponent } from './components/API/vehicle/vehicle.component';
import { StarwarsComponent } from './components/starwars/starwars.component';

import { RxjsComponent2 } from './components/rxjs/rxjs.component';
@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    CreateComponent,
    EditComponent,
    SwgetComponent,
    NavigationMenuComponent,
    BasePageComponent,
    FilmsComponent,
    PlanetComponent,
    SpeciesComponent,
    StarshipComponent,
    VehicleComponent,
    StarwarsComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatListModule, MatCheckboxModule, MatButtonModule, MatMenuModule, MatSelectModule,
    ReactiveFormsModule, MatInputModule,
    ReactiveFormsModule
  ],
  exports: [MatButtonModule, MatCheckboxModule,
  MatButtonModule, MatMenuModule, MatSelectModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
