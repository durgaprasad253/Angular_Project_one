import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { Router, RouterModule } from '@angular/router';
import { ProjectsAppRoutingModule } from './projects-app-routing.module';




@NgModule({
  declarations: [
    ProjectsComponent
  ],
  exports: [
    ProjectsComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    ProjectsAppRoutingModule
    
  ]
})
export class ProjectsModuleModule { }
