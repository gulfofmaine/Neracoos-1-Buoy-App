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
      let temp:string = "temp";
      temp = temp ;

  }

  ionViewDidLoad() {
    // why does this seem impossible to debug
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
      switch( event_obj.name ) {
        case 'drupal_content_available':
          // the drupal service has returned with the data
          this.initializeDrupalContent();
          break;
        case 'updated_preference':
          if ( event_obj.preference == 'SELECTED_INTERFACE_NAME') {
            this.appConfig.setSelectedInterface(event_obj.value, false);
          }
          break;
        case 'updated_preference':
          if ( event_obj.preference == 'BUOY_SELECTED_LIST') {
            this.appConfig.setBuoySelectionList(event_obj.value);
          }
          break;
        case 'updated_preference':
          if ( event_obj.preference == 'PLATFORM_PARAMETER_LIST') {
            this.appConfig.setPlatformParameterList(event_obj.value);
          }
          break;
        default:
          console.log('unhandled event HomePage' + event_obj.name);
          break;
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
