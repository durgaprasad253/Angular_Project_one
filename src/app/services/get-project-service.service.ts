import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map,Observable } from 'rxjs';
import { projectSchema } from '../projects-module/projects'

@Injectable({
  providedIn: 'root'
})
export class GetProjectServiceService {

  private projectCollections: AngularFirestoreCollection<projectSchema>;
  private projectDoc: AngularFirestoreDocument<projectSchema> | undefined
  private projects: Observable<projectSchema[]>

  constructor(private firestore: AngularFirestore) {
    this.projectCollections = firestore.collection<projectSchema>('projects');
    this.projects = this.projectCollections.snapshotChanges().pipe(map(action => action.map(temp =>{
      const data = temp.payload.doc.data() as projectSchema;

      data.id = temp.payload.doc.id;

      return data;
    })));
    
   }

  getProjects() {
   return this.projects;
  }

  adddProject(project: projectSchema) {
      this.projectCollections.add(project);
   }

  updateProject(project: projectSchema) {
    this.firestore.doc('projects/'+project.id).update(project);
  }

  deleteProject(project: projectSchema) {
    this.projectDoc = this.firestore.doc('projects/'+project.id)
    this.projectDoc.delete()
  }


}
