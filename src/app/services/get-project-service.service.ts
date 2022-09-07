import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Project { name: string; techstack: string};

@Injectable({
  providedIn: 'root'
})
export class GetProjectServiceService {

  projectCollections: AngularFirestoreCollection<Project>;
  projects: Observable<Project[]>
  snapshot: any;

  constructor(private firestore: AngularFirestore) {
    this.projectCollections = firestore.collection<Project>('projects');
    this.projects = this.projectCollections.valueChanges();
    this.snapshot = this.projectCollections.snapshotChanges();
   }

  getProjects() {
   return this.projects;
}
}
