import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {}

  getUserData(){
    return this.afd.list('/userData/');
  }

  addUser(name, lastname, mail, city){
    this.afd.list('/userData/').push({name: name, lastname: lastname, mail: mail, city: city});
  }

  removeUser(id){
    this.afd.list('/userData/').remove(id);
  }
}
