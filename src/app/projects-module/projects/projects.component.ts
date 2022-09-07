import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetProjectServiceService } from 'src/app/services/get-project-service.service';

export interface Project { name: string; techstack: string};
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;


  constructor(private getProjectServiceService: GetProjectServiceService) { }

  ngOnInit(): void {
    this.getProjectServiceService.getProjects().subscribe((res) => {
      this.projects = res;

    })
  }
}
