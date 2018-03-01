import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BuoydataMapPage } from '../pages/buoydata-map/buoydata-map' ;
import { WaveGraphPage } from '../pages/wave-graph/wave-graph';
import { AppConfig } from '../providers/appconfig/appconfig';
import { WaveProvider } from '../providers/wave/wave';
import { WaterlevelProvider } from '../providers/waterlevel/waterlevel';
// import { PopoverController } from 'ionic-angular';
import { MappingProvider } from '../providers/mapping/mapping';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = BuoydataMapPage;
  rootPage: any = WaveGraphPage;

  pages: Array<{title: string, component: any}>;

  //layer picker
  toggleStatus: boolean = true ;
  isToggled: any;
  labeled_options_display: any ;
  base_options_display: any ;
  filter_type: any ;
  buoyMapPage: any ;
  // end layer picker

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public appConfig: AppConfig,
              public waveService: WaveProvider,
              public waterlevelService: WaterlevelProvider,
              public mapService: MappingProvider,
              public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Buoy Map', component: BuoydataMapPage },
      { title: 'Waves', component: WaveGraphPage },
      { title: 'List', component: ListPage }
    ];
    // layer picker
    // subscribe to the initialdata loaded event
    this.mapService.mapProvUpdates().subscribe( event_obj => {
      console.log( event_obj.name ) ;
      if ( event_obj.name == "initial_map_data_loaded" ) {
        this.labeled_options_display = this.getOptionsDisplay('labeled');
        this.base_options_display = this.getOptionsDisplay('base');
      }
    });
    // subscribe to the page loading event
    events.subscribe('buoyMapPage:loaded', (page) => {
      this.buoyMapPage = page ;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // getting preferences is asynchronous so do it now.
      this.appConfig.updateUserPreferences(0);
      this.waveService.initializeData(true);
      this.waterlevelService.initializeData(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  getPageName() {
    let view:any = this.nav.getActive() ;
    let pagename:string = "no page yet" ;
    if ( view != undefined ) {
      pagename =  view.name;
    }
    return( pagename) ;
  }

  // layer picker
  getOptionsDisplay(layer_type) {
    let options: any = []
    for ( let mKey in this.mapService.layer_metadata ) {
      let layer_options: any = {} ;
      switch ( layer_type ) {
        case 'base':
        if ( this.mapService.layer_metadata[mKey].isBaseLayer) {
          layer_options.displayName = this.mapService.layer_metadata[mKey].displayName ;
          layer_options.name = this.mapService.layer_metadata[mKey].name ;
          layer_options.visibility = this.mapService.layer_metadata[mKey].visibility ;
          layer_options.isBaseLayer = this.mapService.layer_metadata[mKey].isBaseLayer ;
          layer_options.opacity = 100 * this.mapService.layer_metadata[mKey].opacity ;
          options.push( layer_options);
        }
        break;
        case 'labeled':
        if ( this.mapService.layer_metadata[mKey].isLabeledLayer ) {
          layer_options.displayName = this.mapService.layer_metadata[mKey].displayName ;
          layer_options.name = this.mapService.layer_metadata[mKey].name ;
          layer_options.visibility = this.mapService.layer_metadata[mKey].visibility ;
          layer_options.isLabeledLayer = this.mapService.layer_metadata[mKey].isLabeledLayer ;
          layer_options.show_labels = this.mapService.layer_metadata[mKey].show_labels ;
          options.push( layer_options);
        }
        break;
      }
    }
    return( options ) ;
  }
  updateVisibility(layer) {
    let olLayer: any = this.buoyMapPage.getFeatureLayer(layer.name);
    let visible: boolean = olLayer.getVisible() ;
    olLayer.setVisible(!visible);
    this.mapService.toggleLayerVisibility(layer.name)
  }
  updateLabelVisibility(layer) {
    this.mapService.toggleLayerLabelVisibility(layer.name) ;
    let olLayer: any = this.buoyMapPage.getFeatureLayer(layer.name);
    this.mapService.refreshLayer( olLayer );
  }
  updateOpacity(layer) {
    let olLayer: any = this.buoyMapPage.getFeatureLayer(layer.name);
    let opacity: number = layer.opacity / 100 ;
    olLayer.setOpacity(opacity);
  }
  // end layer picker
  // filters platform, station
  platformTapped(event, item) {
    this.appConfig.setPlatformSelected(this.waveService, item.properties.name);
  }

  tideTapped(event, item) {
    this.appConfig.setTideSelected(this.waterlevelService, item.monitoringlocationidentifier);
  }

  waveTapped(event, item) {
    this.appConfig.setWaveModelSelected(item.model_id);
  }
  // end filters platform, station
}
