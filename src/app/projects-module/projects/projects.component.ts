import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { GetProjectServiceService } from 'src/app/services/get-project-service.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;


  constructor(private getProjectServiceService: GetProjectServiceService,private location: Location,) { }

  ngOnInit(): void {
    this.getProjectServiceService.getProjects().subscribe((res) => {
      this.projects = res;

    })
  }

  back() {
    this.location.back();
  }
}
