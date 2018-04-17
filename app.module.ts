import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { firestore } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDcZPDUN6ddbywZYBpF_rDKojTrbVOokX8",
  authDomain: "buscarddbserver-54114.firebaseapp.com",
  databaseURL: "https://buscarddbserver-54114.firebaseio.com",
  projectId: "buscarddbserver-54114",
  storageBucket: "buscarddbserver-54114.appspot.com",
  messagingSenderId: "512882775679"
};

@NgModule({
  declarations: [
    MyApp,  
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}    
  ]
})
export class AppModule {}
