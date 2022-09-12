import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { GetProjectServiceService } from 'src/app/services/get-project-service.service';
import { projectSchema } from '../projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;
  static updateFlag: boolean;
  static projectEdit: projectSchema;


  constructor(private getProjectServiceService: GetProjectServiceService,private location: Location,private router: Router) { }

  ngOnInit(): void {
    this.getProjectServiceService.getProjects().subscribe((res) => {
      this.projects = res;

    })
  }

  back() {
    this.location.back();
  }

  updateProject(event: any, project: projectSchema) {
    ProjectsComponent.updateFlag = true;
    ProjectsComponent.projectEdit = project;
    this.router.navigate(['/project/add-project'])
  }

  handleDelete(event: any, project: projectSchema) {
    if(confirm("Are you sure you want to delete this ?" + project.name + ". This action is permanent"))
    {
      this.getProjectServiceService.deleteProject(project);
    }
  }
}
