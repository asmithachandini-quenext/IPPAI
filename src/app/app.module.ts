import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { PodcastComponent } from './podcast/podcast.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { DocumentsComponent } from './documents/documents.component';
import { HttpClientModule } from '@angular/common/http';
import { IRPRIComponent } from './irpri/irpri.component';
import { MembersComponent } from './members/members.component';
import { MissionVissionComponent } from './mission-vission/mission-vission.component';
import { RPRComponent } from './rpr/rpr.component';
import { PowerAwardsComponent } from './power-awards/power-awards.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    EventsComponent,
    PodcastComponent,
    ContactComponent,
    NewsComponent,
    DocumentsComponent,
    IRPRIComponent,
    MembersComponent,
    MissionVissionComponent,
    RPRComponent,
    PowerAwardsComponent,
    RegisterComponent,
    PdfViewerComponent,
    SafeUrlPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
