import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { EducationComponent } from './education/education.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { CourseCertificatesComponent } from './course-certificates/course-certificates.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ProjectsComponent,
    ResearchComponent,
    VolunteeringComponent,
    MenuComponent,
    HomeComponent,
    WorkExperienceComponent,
    CourseCertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DividerModule,
    BrowserAnimationsModule,
    FormsModule,
    TabMenuModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
