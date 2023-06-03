import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {AboutComponent} from "./about/about.component";
import {ProductionCapacityComponent} from "./pages/production-capacity/production-capacity.component";
import {ProjectsComponent} from "./projects/projects.component";
import {VacanciesComponent} from "./pages/vacancies/vacancies.component";
import {NewsComponent} from "./pages/news/news.component";
import {ContactsComponent} from "./contacts/contacts.component";
import { LayoutComponent } from './shared/components/layout/layout.component';
import {PostNewsComponent} from "./pages/news/post-news/post-news.component";


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainComponent},
      {path: 'about', component: AboutComponent},
      {path: 'production', component: ProductionCapacityComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'vacancies', component: VacanciesComponent},
      {path: 'news', component: NewsComponent},
      {path: 'post/:id', component: PostNewsComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: '', component: ContactsComponent},
    ]
  },
  { path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
