import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppConfig } from '../../providers/appconfig/appconfig';
/**
 * Generated class for the PlatformDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-platform-data',
  templateUrl: 'platform-data.html',
})
export class PlatformDataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public appConfig: AppConfig) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlatformDataPage');
  }
  ionViewDidEnter() {
    this.appConfig.enableMenu('platform_menu') ;
    console.log('ionViewDidEnter PlatformDataPage');
  }

}
