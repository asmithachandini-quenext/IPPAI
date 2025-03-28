import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { PodcastComponent } from './podcast/podcast.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { DocumentsComponent } from './documents/documents.component';
import { IRPRIComponent } from './irpri/irpri.component';
import { MembersComponent } from './members/members.component';
import { MissionVissionComponent } from './mission-vission/mission-vission.component';
import { RPRComponent } from './rpr/rpr.component';
import { PowerAwardsComponent } from './power-awards/power-awards.component';
import { RegisterComponent } from './register/register.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'event', component: EventsComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Document', component: DocumentsComponent },
  { path: 'IRPRI', component: IRPRIComponent },
  { path: 'mission-vision', component: MissionVissionComponent },
  { path: 'advisory-board', component: MembersComponent },
  { path: 'rpr', component: RPRComponent },
  { path: 'power-awards', component: PowerAwardsComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'view-pdf/:fileName', component: PdfViewerComponent },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },

];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
