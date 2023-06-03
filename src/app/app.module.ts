import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {AppRoutingModule} from "./app-routing.module";
import { AboutComponent } from './about/about.component';
import { ProductionCapacityComponent } from './pages/production-capacity/production-capacity.component';
import { ProjectsComponent } from './projects/projects.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { PostNewsComponent } from './pages/news/post-news/post-news.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ProductionCapacityComponent,
    ProjectsComponent,
    VacanciesComponent,
    NewsComponent,
    ContactsComponent,
    LayoutComponent,
    PostNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
