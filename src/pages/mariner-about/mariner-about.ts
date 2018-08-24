// Mariner about page driven by contentservice.gmri.org

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppConfig } from '../../providers/appconfig/appconfig';


@IonicPage({
  name: 'AboutPage'
})
@Component({
  selector: 'page-mariner-about',
  templateUrl: 'mariner-about.html',
})
export class MarinerAboutPage {

  aboutContent: string  // displayed in body of about page

  constructor(
    public appConfig: AppConfig,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarinerAboutPage');
    this.initializeDrupalContent()
  }

  // Fetch about page content from contentservice.gmri.org
  initializeDrupalContent() {
    for ( var cKey in this.appConfig.drupalContent ) {
      if ( this.appConfig.drupalContent[cKey].field_neracoos_buoy_pwa_id[0].value == 'about_page_content') {
        this.aboutContent = this.appConfig.drupalContent[cKey].body[0].value
      }
    }
  }
}
