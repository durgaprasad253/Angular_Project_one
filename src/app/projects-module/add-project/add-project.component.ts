import { Component, OnInit } from '@angular/core';
import { GetProjectServiceService } from 'src/app/services/get-project-service.service';
import { projectSchema } from '../projects';
import { Location } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project!: projectSchema;


  constructor(private location: Location, private getProjectService: GetProjectServiceService, private projectComponent: ProjectsComponent) {}

  ngOnInit(): void {
    if(ProjectsComponent.updateFlag === true){
        this.project = ProjectsComponent.projectEdit;
    }
    else{
      this.project = {
        id: '',
        name: '',
        description: '',
        startDate: new Date(),
        duration: 0,
        budget: 0,
        status: '',
        staffCost: 0
      }
    }
  }

  onSubmit() {
      if(this.project?.name != '' && this.project?.description != '' && this.project?.status != '' && ProjectsComponent.updateFlag===false ){
        this.getProjectService.adddProject(this.project);
        this.project.name = '',
        this.project.description= '',
        this.project.staffCost= 0,
        this.project.budget= 0,
        this.project.status= '',
        this.project.duration= 0,
        this.project.startDate = new Date();
        this.location.back();
      }
      else if(this.project?.name != '' && this.project?.description != '' && this.project?.status != '' && ProjectsComponent.updateFlag===true){
        this.getProjectService.updateProject(this.project);
        this.project.name = '',
        this.project.description= '',
        this.project.staffCost= 0,
        this.project.budget= 0,
        this.project.status= '',
        this.project.duration= 0,
        this.project.startDate = new Date();
        this.location.back();
      }
    }
  }


