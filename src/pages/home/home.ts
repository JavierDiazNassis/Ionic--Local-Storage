import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 inputext:string;
 key: string = 'username' ;
  constructor(public navCtrl: NavController, private storage:Storage) {

  }
 saveData(){
  this.storage.set(this.key, this.inputext);
 }
 loadData(){
   this.storage.get(this.key).then((val)=>{ console.log('tu nombre es:', val)
  });
 }
}
