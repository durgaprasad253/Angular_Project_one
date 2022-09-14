import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { projectSchema } from '../projects-module/projects'


@Injectable({
  providedIn: 'root'
})
export class GetProjectServiceService {

  private projectCollections: AngularFirestoreCollection<projectSchema>;
  private projectDoc: AngularFirestoreDocument<projectSchema> | undefined;
  private projects: Observable<projectSchema[]>

  constructor(private firestore: AngularFirestore) {
    this.projectCollections = firestore.collection<projectSchema>('projects');
    this.projects = this.firestore.collection<projectSchema>('projects').valueChanges({idField: 'id'});
    
   }

  getProjects() {
   return this.projects;
  }

  adddProject(project: projectSchema) {
      this.projectCollections.add(project);
   }

  deleteProject(project: projectSchema) {
    this.projectDoc = this.firestore.doc('projects/'+project.id)
    this.projectDoc.delete()
  }

  updateProject(project: projectSchema) {
    this.firestore.doc('projects.id'+project.id).update(project);
  }




}
