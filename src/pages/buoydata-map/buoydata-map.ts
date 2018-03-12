import { Component, ViewChild, Renderer  } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App, PopoverController, MenuController, Events } from 'ionic-angular';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Observable, Subscription } from 'rxjs/Rx';
import { AppConfig } from '../../providers/appconfig/appconfig';
import { MappingProvider } from '../../providers/mapping/mapping';
//import { InundationProvider } from '../../providers/inundation-provider';
import { WaveProvider } from '../../providers/wave/wave';
import { WaterlevelProvider } from '../../providers/waterlevel/waterlevel';
// import {GMRIOpenlayers1Layer} from "../../gmri/mapping/gmri-openlayers1";
import {GMRIPlatformLayer} from "../../gmri/mapping/gmriPlatformMap";
import {GMRIStationLayer} from "../../gmri/mapping/gmriStationMap";
import {ESRIOceanTopoBaseLayer} from "../../gmri/mapping/gmriBaselayerMap";
import {ESRIOceanReferenceBaseLayer} from "../../gmri/mapping/gmriBaselayerMap";
import {MaritimeChartServerBaseLayer} from "../../gmri/mapping/gmriBaselayerMap";
import {GMRIErddap} from "../../gmri/data/gmri-erddap";


declare var require: any;
declare var ol: any;

/**
 * Generated class for the BuoydataMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buoydata-map',
  templateUrl: 'buoydata-map.html',
  providers: [Location,
              {provide: LocationStrategy, useClass: PathLocationStrategy},
              InAppBrowser]
})
export class BuoydataMapPage {

  @ViewChild('map') map;
  @ViewChild('popup') popup;
  ol_map: any;
  start_zoom: number = 7;
	lon: number = -70.211086;
	lat: number =  43.5;
	serviceInitialized : boolean = false ;
	inundationLocationsLoaded: any = [] ;
	mapInundationWarningsUpdated : boolean = false ;
	mapInundationNecofsWarningsUpdated : boolean = false ;
	// selected feature popup
	selectedFeatureHTML: string ;
	selectedFeature: any;
  icon_path: string;
	// refresh timer
  private timer;
  // Subscription object
  private sub: Subscription;
  // page observable
  buoyMapPageProv: any;
  buoyMapPageProvObserver: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public appConfig: AppConfig,
            public platform: Platform,
            public renderer: Renderer,
            public mapService: MappingProvider,
            public location: Location,
            // public inundationService: InundationProvider,
            public waveService: WaveProvider,
            public waterlevelService: WaterlevelProvider,
            public appCtrl: App,
            public iap: InAppBrowser,
            public popoverCtrl: PopoverController,
            public menuCtrl: MenuController,
            public events: Events) {
    ol = require('openlayers/dist/ol-debug');
    platform.ready().then(() => {
      console.log("Platform is ready");
    });
    this.icon_path = this.location.path();
    this.buoyMapPageProv = Observable.create(observer => {
      this.buoyMapPageProvObserver = observer;
    });
  }

  buoyMapPageProvUpdates() {
    return this.buoyMapPageProv;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuoydataMapPage');

    // After 15 minutes refresh and do it every 15 minutes after that.
    this.timer = Observable.timer(15 * 60 * 1000, 15 * 60 * 1000);
    // subscribing to a observable returns a subscription object
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
    this.initializeService();
    // var c = document.getElementById(this.map).children;

    this.ol_map = this.mapService.loadMap(this.map, this.lat, this.lon,
                                this.start_zoom, this.map.nativeElement.childNodes[1], this);
    // send out the page for app.compnent.ts to subscribe to.
    // send out an event object
    let event_obj_init_data: any = { name: "buoyMapPageLoaded", "Page": this } ;
    if ( this.buoyMapPageProvObserver != undefined ) {
      this.buoyMapPageProvObserver.next(event_obj_init_data);
    }
    // that didn't pan out so try this
    this.events.publish('buoyMapPage:loaded', this);
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter BuoydataMapPage');
    let everybodyReady: boolean = true ;
    if ( !this.waveService.isInitialized() ) {
      everybodyReady = false ;
      this.waveService.waveProvUpdates().subscribe( event_obj => {
        console.log( event_obj.name ) ;
        if ( event_obj.name == "initial_platform_data_loaded" ) {
          if ( this.waterlevelService.isInitialized() &&
               this.mapService.isInitialized() ) {
              this.erosionEventCheck();
          }
        }
      });
    }
    if ( !this.waveService.isInitialized() ) {
      everybodyReady = false ;
      this.waterlevelService.tideProvUpdates().subscribe( event_obj => {
        console.log( event_obj.name ) ;
        if ( event_obj.name == "initial_station_data_loaded" ) {
          if ( this.waveService.isInitialized() &&
                this.mapService.isInitialized()) {
              this.erosionEventCheck();
          }
        }
      });
    }
    if ( !this.mapService.isInitialized() ) {
      everybodyReady = false ;
      // confusing I know. This is done by the page
      this.initializeService();
      // subscribe to the initialdata loaded event
      this.mapService.mapProvUpdates().subscribe( event_obj => {
        console.log( event_obj.name ) ;
        if ( event_obj.name == "initial_map_data_loaded" ) {
          if ( this.waterlevelService.isInitialized() &&
                this.waveService.isInitialized()) {
              this.erosionEventCheck();
          }
        }
      });
    }
    // walk the locations, triggering a load of any that aren't done
    if ( everybodyReady) {
      this.erosionEventCheck();
    }
  }
  showSelection() {
    let popover = this.popoverCtrl.create('LayerPickerPage', {filter_type:"mapoptions", parent: this});
    popover.onDidDismiss(data => {
      // let returned: any = data;
    });
    popover.present({
    });
  }
  initializeService() {
    // if ( !this.serviceInitialized ) {
    if ( this.mapService.layer_metadata.length == 0 ) {
      let icon_path: string = this.location.path();
      // separate out the layer creation so I can
      // add the inundation layer on it's own.
      let MCSLayer: any = new MaritimeChartServerBaseLayer("MaritimeChartServer", false);
      MCSLayer.olLayer = MCSLayer.initializeLayer();
      this.mapService.layer_metadata.push( MCSLayer ) ;

      let ESRIOceanTopoLayer: any = new ESRIOceanTopoBaseLayer("ESRIOceanTOPO", true);
      ESRIOceanTopoLayer.olLayer = ESRIOceanTopoLayer.initializeLayer();
      this.mapService.layer_metadata.push( ESRIOceanTopoLayer ) ;

      let ESRIOceanReferenceLayer: any = new ESRIOceanReferenceBaseLayer("ESRIOceanReference", true);
      ESRIOceanReferenceLayer.olLayer = ESRIOceanReferenceLayer.initializeLayer();
      this.mapService.layer_metadata.push( ESRIOceanReferenceLayer ) ;

      let platformLayer: any = new GMRIPlatformLayer("PLATFORM", true);
      platformLayer.olLayer = platformLayer.initializeLayer(icon_path, this.platform, false);
      this.mapService.layer_metadata.push( platformLayer ) ;

      let stationLayer: any = new GMRIStationLayer("STATION", true);
      stationLayer.olLayer = stationLayer.initializeLayer(icon_path, this.platform, false);
      this.mapService.layer_metadata.push( stationLayer ) ;
    }
    // this didn't help the page gets loaded from scratch after another page
    // had loaded in the interim
    this.serviceInitialized = true;
  }
  // check each location and update the map if any erosion events are flagged
  // am I subscribing too often?
  erosionEventCheck() {
    // subscribe to the initialdata loaded event
    var temp = 1;
    temp++ ;
  }
  updateMapFeature(location_name, data_queried) {
    let layer: any = this.getFeatureLayer("INUNDATION");
    this.mapService.refreshLayer(layer);
    // I didn't need any of this below. The map is using the inundationService to
    // redraw the icons all the time. I just had to refresh the layer.
    /*
    let inundObj: any = this.inundationService.getMonitoringLocation(location_name);
    if ( inundObj != undefined &&  inundObj.stocktonForecast != undefined ) {
      // let layer: any = this.getFeatureLayer("INUNDATION");
      // let feature: any = this.getLocationFeature(layer, location_name);
      if ( location_name == 'MILE_STRETCH_ROAD' ) {
        var test = 'test';
      }
      if ( inundObj.stocktonForecast.forecast_completed ) {
        this.inundationLocationsLoaded[location_name] = true ;
      }
    }
    let allLoaded : boolean = true ;
    for ( var lKey in this.inundationLocationsLoaded ) {
      if ( this.inundationLocationsLoaded[lKey] != true ) {
        allLoaded = false ;
      }
    }
    if ( allLoaded ) {
      var temp = "temp";
      let layer: any = this.getFeatureLayer("INUNDATION");
      this.mapService.refreshLayer(layer);
      switch( data_queried ) {
        case 'stablex_data':
          if ( layer != undefined && !this.mapInundationWarningsUpdated ) {
            this.ol_map.removeLayer(layer);
            let indLayer: any = this.mapService.initializeInundationLayer(this.inundationService);
            this.ol_map.addLayer(indLayer);
            // this.ol_map.changed();
            let newLayer: any = this.getFeatureLayer("INUNDATION");
            this.mapService.refreshLayer(newLayer);
            this.mapInundationWarningsUpdated = true ;
          }
          break;
        case 'necofsx_data':
          if ( layer != undefined && !this.mapInundationNecofsWarningsUpdated ) {
            this.ol_map.removeLayer(layer);
            let indLayer: any = this.mapService.initializeInundationLayer(this.inundationService);
            this.ol_map.addLayer(indLayer);
            // this.ol_map.changed();
            let newLayer: any = this.getFeatureLayer("INUNDATION");
            this.mapService.refreshLayer(newLayer);
            this.mapInundationNecofsWarningsUpdated = true ;
          }
          break;
      }
    }
    */
  }
  tickerFunc(tick){
    console.log(this);
    // refresh the data.
    this.appConfig.initializeDateRange();
  }
  getLocationFeature( layer, location_name ) {
    let ret_feature: any ;
    let features: any = layer.getSource().getFeatures();
    for ( var fKey in features ) {
      if ( features[fKey].values_.monitoringlocationidentifier == location_name ) {
        ret_feature = features[fKey] ;
      }
    }
  return( ret_feature);
  }
  getFeatureLayer(layer_name) {
    let ret_layer: any;
    // this.ol_map doesn't seem to always be there
    // let layers: any = this.ol_map.getLayers().getArray();
    let layers: any = this.mapService.olMap.getLayers().getArray();
    for ( var lKey in layers ) {
      let name: string = layers[lKey].getProperties().name ;
      if ( name != undefined && name == layer_name ) {
        ret_layer = layers[lKey] ;
        break;
      }
    }
  return (ret_layer);
  }
  removeFeatureInfo( e, map ) {
    if ( this.mapService.featureOverlay != undefined ) {
      map.removeOverlay(this.mapService.featureOverlay) ;
      this.mapService.featureOverlay = null ;
    }
    this.selectedFeatureHTML = null ;
    this.selectedFeature = null ;
  }
  displayFeatureInfo( e, feature, layer, map ) {
    if ( this.mapService.featureOverlay != undefined ) {
      map.removeOverlay(this.mapService.featureOverlay) ;
      this.mapService.featureOverlay = null ;
    }
    let fLayer = this.mapService.getLayerClass( layer.get('name'));
    this.selectedFeatureHTML = fLayer.getHoverTextForFeature(feature) ;
    this.selectedFeature = feature;
    this.mapService.featurePopup = new ol.Overlay({
      element: this.mapService.featureElement,
      positioning: 'bottom-center',
      stopEvent: false
    });
    this.mapService.featurePopup.setPosition( e.coordinate ) ;
    map.addOverlay(this.mapService.featurePopup);
  }

  isNOAATideStation(location) {
    let isStation : boolean = true ;
    // I've got some not real noaa tide stations in here.
    // Don't allow click overs to NOAA on them.
    let convert : number = parseInt(location);
    if ( isNaN(convert)) {
      isStation = false ;
    } else {
      isStation = true ;
    }
    return(isStation);
  }

  navigateByFeatureInfo (e, features,layers) {
    let allowClick : boolean = true ;
    if (features.length > 0) {
      let location: string ;
      let layername: string ;
      for (var i = 0, ii = features.length; i < ii; ++i) {
        // var geometry = features[i].getGeometry();
        // var coord = geometry.getCoordinates();
        var platform_test = features[i].get('mooring_site_desc') ;
        if ( platform_test != undefined ) {
          location = features[i].get('name') ;
          layername = "PLATFORM";
          break;
        }
        var station_test = features[i].get('projectidentifier') ;
        if ( station_test != undefined && station_test == "NOS/CO-OPS" ) {
          location = features[i].get('monitoringlocationidentifier') ;
          layername = "STATION";
          // I've got some not real noaa tide stations in here.
          // Don't allow click overs to NOAA on them.
          let convert : number = parseInt(location);
          if ( isNaN(convert)) {
            allowClick = false ;
          }
          break;
        }
        location = features[i].get('monitoringlocationidentifier');
        if ( location != undefined ) {
          layername  = features[i].get('layername');
          break;
        }
        break;
      }
      if ( allowClick ) {
        this.locationClick(location, layername, features[i]);
      }
      // Gave up on trying to display anything. It's not really mobile friendly anyway
      /*
      var info = [];
      for (var i = 0, ii = features.length; i < ii; ++i) {
        var geometry = features[i].getGeometry();
        var coord = geometry.getCoordinates();
        var button = '<input onClick="this.locationClick(' + "'" +
                    features[i].values_.monitoringlocationidentifier + "', '" +
                    features[i].values_.layername + "')" + '">' +
                   features[i].values_.monitoringlocationname + "</input>";
        info.push(button);
      }
      let popupHtml: string = info.join(', ') || '(unknown)';
      this.mapService.featureElement.innerHTML = popupHtml;
      var randomPositioning = this.pickRandomProperty();
      this.mapService.featurePopup.setPositioning(randomPositioning);
      this.mapService.featurePopup.setPosition(e.coordinate);
      */
    } else {
      // this.mapService.featureElement.innerHTML = '&nbsp;';
    }
  }
 pickRandomProperty() {
    var prefix = ['bottom', 'center', 'top'];
    var randPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    var suffix = ['left', 'center', 'right'];
    var randSuffix = suffix[Math.floor(Math.random() * suffix.length)];
    return randPrefix + '-' + randSuffix;
  }
  locationClick(location, layer, feature) {
    switch ( layer ) {
      case "PLATFORM":
        switch ( feature.get('program')) {
          case 'NOAA_CLICKOVERENABLED':
            var noaa_url = "http://www.ndbc.noaa.gov/station_page.php?station=" + location ;
            this.platform.ready().then(() => {
              let browser: any = this.iap.create(noaa_url, "_system", "location=true");
              browser.show();
            });
            break;
          case 'NOAA':
          case 'NERACOOS':
            this.appConfig.setPlatformSelected(this.waveService, location);
            this.navCtrl.popToRoot();
            this.navCtrl.push("WaveTabsPage");
            break;
        }
        break;
      case "STATION":
        this.appConfig.setTideSelected(this.waterlevelService, location);
        this.navCtrl.popToRoot();
        this.navCtrl.push("TideTabsPage");
        break;
      default:
        break;
    }
  }

}

