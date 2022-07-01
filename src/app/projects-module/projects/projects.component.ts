import { Component, OnInit } from '@angular/core';
import {projectList} from '../projects'
import { Location } from '@angular/common'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = projectList;

  constructor(private location: Location) { }

  returnBack() {
    this.location.back();
  }

 

  ngOnInit(): void {
  }

}
