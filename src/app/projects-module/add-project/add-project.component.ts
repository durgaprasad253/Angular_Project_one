import { Component, OnInit } from '@angular/core';
import { GetProjectServiceService } from 'src/app/services/get-project-service.service';
import { projectSchema } from '../projects';
import { Location } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  projectForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    duration: new FormControl(''),
    budget: new FormControl(''),
    status: new FormControl(''),
    staffCost: new FormControl(''),
  });

  constructor(private location: Location, private getProjectService: GetProjectServiceService) {}

  ngOnInit(): void {
  }

  onSubmit() {
      const newProject = this.projectForm.value;
      console.log(typeof(newProject));
      this.getProjectService.adddProject(newProject);
      
    }
  }


