import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component'; 
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

export const routes: Routes = [
 {
          path:'',
          component: HomePageComponent
 },
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
 },
 {
          path: "TodoApp",
          component: TodoAppComponent
 }
];
