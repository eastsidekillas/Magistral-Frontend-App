import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductionCapacityComponent } from './pages/production-capacity/production-capacity.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const appRoutes: Routes =[
  { path: '', component: MainComponent},
  { path: 'about', component: AboutComponent},
  { path: 'production', component: ProductionCapacityComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'vacancies', component: VacanciesComponent},
  { path: 'news', component: NewsComponent},
  { path: 'contacts', component: ContactsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AboutComponent,
    ProductionCapacityComponent,
    ProjectsComponent,
    VacanciesComponent,
    NewsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
