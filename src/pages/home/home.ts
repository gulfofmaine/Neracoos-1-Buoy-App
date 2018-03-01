import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppConfig } from '../../providers/appconfig/appconfig';
import { WaveProvider } from '../../providers/wave/wave';
import { WaterlevelProvider } from '../../providers/waterlevel/waterlevel';

@IonicPage(
 {
 name: "HomePage"
 }
)
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contentOne: string;
  constructor(public navCtrl: NavController,
              public appConfig: AppConfig,
              public waveService: WaveProvider,
              public waterlevelService: WaterlevelProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    // There are two situations where a page might be loaded.
    // on start up where it will need to be subscribed to the content loading
    // and lazy loading where the content already exists.
    // You need to check both.
    if ( this.appConfig.drupalContent != undefined ) {
      this.initializeDrupalContent();
    }
    this.appConfig.configUpdates().subscribe( event_obj => {
      console.log( event_obj.name ) ;
      if ( event_obj.name == "drupal_content_available" ) {
        // the drupal service has returned with the data
        this.initializeDrupalContent();
      }
    });
  }
  ionViewDidEnter() {
  }
  initializeDrupalContent() {
    for ( var cKey in this.appConfig.drupalContent ) {
      if ( this.appConfig.drupalContent[cKey].field_neracoos_buoy_pwa_id[0].value == "home_page_content" ) {
        this.contentOne = this.appConfig.drupalContent[cKey].body[0].value ;
      }
    }
  }
}
