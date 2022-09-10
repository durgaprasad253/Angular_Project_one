import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { projectSchema } from '../projects-module/projects'

@Injectable({
  providedIn: 'root'
})
export class GetProjectServiceService {

  projectCollections: AngularFirestoreCollection<projectSchema>;
  projects: Observable<projectSchema[]>
  snapshot: any;

  constructor(private firestore: AngularFirestore) {
    this.projectCollections = firestore.collection<projectSchema>('projects');
    this.projects = this.projectCollections.valueChanges({idField: 'id'});
    this.snapshot = this.projectCollections.snapshotChanges();
   }

  getProjects() {
   return this.projects;
  }

  adddProject(project: projectSchema) {
      this.projectCollections.add(project);
   }


}
