import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {ProjectComponent} from './project/project.component';
import {BlogComponent} from './blog/blog.component';
import {ResumeComponent} from './home/resume.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'articles', component: BlogComponent},
  {path: '**', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
