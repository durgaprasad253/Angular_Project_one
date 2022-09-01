import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectsAppRoutingModule } from './projects-app-routing.module';




@NgModule({
  declarations: [
    ProjectsComponent
  ],
  exports: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    ProjectsAppRoutingModule
    
  ]
})
export class ProjectsModuleModule { }
