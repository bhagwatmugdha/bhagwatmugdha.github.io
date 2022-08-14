import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCertificatesComponent } from './course-certificates/course-certificates.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'workexperience', component: WorkExperienceComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'coursecertificates', component: CourseCertificatesComponent },
  { path: 'volunteering', component: VolunteeringComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
