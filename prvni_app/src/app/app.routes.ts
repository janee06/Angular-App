import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component'; 
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
 {
          path: "AboutPage",
          component: AboutPageComponent
 },
 {
          
          path: "ProjectPage",
          component: ProjectPageComponent
 },
 {
          path:"ContactPage",
          component: ContactPageComponent
 }
];
