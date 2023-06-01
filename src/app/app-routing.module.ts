import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProductionCapacityComponent} from "./pages/production-capacity/production-capacity.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {VacanciesComponent} from "./pages/vacancies/vacancies.component";
import {NewsComponent} from "./pages/news/news.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'production', component: ProductionCapacityComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'vacancies', component: VacanciesComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contacts', component: ContactsComponent},

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
