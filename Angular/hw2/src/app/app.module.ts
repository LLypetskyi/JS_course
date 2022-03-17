import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CroppingComponent } from './cropping/cropping.component';
import { MapsAndAnalysisComponent } from './maps-and-analysis/maps-and-analysis.component';
import { PlanningComponent} from './planning/planning.component';
import { SoilComponent } from './soil/soil.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes =[
  {path: '', component: DashboardComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'cropping', component: CroppingComponent},
  {path: 'mapsAndAnalysis', component: MapsAndAnalysisComponent},
  {path: 'planning', component: PlanningComponent},
  {path: 'soil', component: SoilComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CroppingComponent,
    MapsAndAnalysisComponent,
    PlanningComponent,
    SoilComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
