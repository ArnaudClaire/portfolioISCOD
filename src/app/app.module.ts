import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GifTestComponent } from './gif-test/gif-test.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { CompetencesComponent } from './competences/competences.component';
import { FormationComponent } from './formation/formation.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { Title } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeComponent,
    NavbarComponent,
    GifTestComponent,
    RealisationsComponent,
    CompetencesComponent,
    FormationComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
