import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { OurPhilosophyComponent } from './our-philosophy/our-philosophy.component';
import { OurCriteriaComponent } from './our-criteria/our-criteria.component';
import { InvestmentsComponent } from './investments/investments.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'who-we-are', component: WhoWeAreComponent},
  {path:'our-philosophy', component: OurPhilosophyComponent},
  {path:'our-criteria', component: OurCriteriaComponent},
  {path:'investments', component: InvestmentsComponent},
  {path:'career', component: CareerComponent},
  {path:'contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TopbarComponent,
    WhoWeAreComponent,
    OurPhilosophyComponent,
    OurCriteriaComponent,
    InvestmentsComponent,
    CareerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
