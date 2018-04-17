import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userData: FirebaseListObservable<any[]>;
  newName = '';
  newLastname = '';
  newMail = '';
  newCity = '';
  id = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.userData = this.firebaseProvider.getUserData();
  }

  addUser(){
    this.firebaseProvider.addUser(this.newName, this.newLastname, this.newMail, this.newCity);
  }

  removeUser(){
    this.firebaseProvider.removeUser(this.id);
  }

}
