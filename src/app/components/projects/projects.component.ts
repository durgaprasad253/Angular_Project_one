import { Component, OnInit } from '@angular/core';
import {projectList} from '../projects'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = projectList;

  constructor() { }

  ngOnInit(): void {
  }

}
