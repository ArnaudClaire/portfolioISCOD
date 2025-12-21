import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
// import { GifTestComponent } from './gif-test/gif-test.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { CompetencesComponent } from './competences/competences.component';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'real', component: RealisationsComponent, pathMatch: 'full' },
  { path: 'comp', component: CompetencesComponent, pathMatch: 'full' },
  { path: 'formation', component: FormationComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
