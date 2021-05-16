import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Userdata from '../models/userdata.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private dbPath = '/userdata';

  userdataRef: AngularFireList<Userdata>;

  constructor(private db: AngularFireDatabase) {
    this.userdataRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Userdata> {
    return this.userdataRef;
  }

  create(userdata: Userdata): any {
    return this.userdataRef.push(userdata);
  }

  update(key: string, value: any): Promise<void> {
    return this.userdataRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.userdataRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.userdataRef.remove();
  }
}