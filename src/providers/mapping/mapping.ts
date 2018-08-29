import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import { AppConfig } from '../appconfig/appconfig';
// import { GMRIUnits } from '../appconfig/appconfig';
// import {sprintf} from "sprintf-js";
// import {GMRIOpenlayers1Layer} from "../../gmri/mapping/gmri-openlayers1";
import {GMRIInundationLayer} from "../../gmri/mapping/gmriInundationMap";
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs';

import { WaveProvider } from '../wave/wave';
import { AppConfig } from '../../providers/appconfig/appconfig';
/*
  Generated class for the MapProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
declare var require: any;
declare var ol: any;
// declare var view: any;

ol = require('openlayers/dist/ol-debug');
@Injectable()
export class MappingProvider {

  ersiOceanReferenceURL: string = 'http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}';
	esriDeLormeWorldURL: string = 'http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer';

  layer_metadata: any = [] ;
  myDom: any ;
  icon_path: string ;
  featurePopup: any ;
  featureElement: any ;
  mapProv: any;
  mapProvObserver: any;
  mapInitialized: boolean = false ;
  inundationLayer: any ;
  featureOverlay: any ;
  olMap: any ;

  constructor(public http: HttpClient,
              public platform: Platform,
              public waveService: WaveProvider,
              public appConfig: AppConfig) {

    this.inundationLayer = new GMRIInundationLayer("INUNDATION", true, this.appConfig);
    this.mapProv = Observable.create(observer => {
      this.mapProvObserver = observer;
    });
    console.log('Hello MapProvider Provider');
  }

  mapProvUpdates() {
    return this.mapProv;
  }
  isInitialized() {
    return( this.mapInitialized ) ;
  }
  /*
  getLayerKey( layer_name ) {
    let layer_found:any ;
    for ( var lKey in this.layers ) {
      if ( this.layers[lKey].name == layer_name ) {
        layer_found = this.layer_metadata[lKey];
        break;
      }
    }
    return(layer_found);
  }
  */
  getLayerClass( layer_name ) {
    let layer_found:any ;
    for ( var lKey in this.layer_metadata ) {
      if ( this.layer_metadata[lKey].name == layer_name ) {
        layer_found = this.layer_metadata[lKey];
        break;
      }
    }
    return(layer_found);
  }
  getLayerClassKey( layer_name ) {
    let layer_key:any ;
    for ( layer_key in this.layer_metadata ) {
      if ( this.layer_metadata[layer_key].name == layer_name ) {
        break;
      }
    }
    return(layer_key);
  }
  getOlMapLayer(layer_name) {
    let ret_layer: any;
    let layers: any = this.olMap.getLayers().getArray();
    for ( var lKey in layers ) {
      if ( layers[lKey].values_ != undefined &&
            layers[lKey].values_.name != undefined &&
            layers[lKey].values_.name == layer_name ) {
        ret_layer = layers[lKey] ;
        break;
      }
    }
  return (ret_layer);
  }
  setLayerVisibility(layer_name, visibility) {
    let layer_ckey: any = this.getLayerClassKey( layer_name );
    this.layer_metadata[layer_ckey].visibility = visibility ;
    // let olLayer = this.getOlMapLayer(layer_name) ;
    // olLayer.setVisible(visibility);
    /*
    let lKey: any = this.getLayerKey(layer_name) ;
    this.layers[lKey].setVisibility( visibility);
    */
  }
  toggleLayerVisibility(layer_name) {
    let layer_ckey: any = this.getLayerClassKey( layer_name );
    let currentVisibility: boolean = this.layer_metadata[layer_ckey].visibility
    this.layer_metadata[layer_ckey].visibility = !currentVisibility ;
    // let olLayer = this.getOlMapLayer(layer_name) ;
    // olLayer.setVisible(visibility);
    /*
    let lKey: any = this.getLayerKey(layer_name) ;
    this.layers[lKey].setVisibility( visibility);
    */
  }
  toggleLayerLabelVisibility(layer_name) {
    let layer_ckey: any = this.getLayerClassKey( layer_name );
    let currentVisibility: boolean = this.layer_metadata[layer_ckey].show_labels
    this.layer_metadata[layer_ckey].show_labels = !currentVisibility ;
    // let olLayer = this.getOlMapLayer(layer_name) ;
    // olLayer.setVisible(visibility);
    /*
    let lKey: any = this.getLayerKey(layer_name) ;
    this.layers[lKey].setVisibility( visibility);
    */
  }
  loadMap(map, lat, lon, start_zoom, popup, parentPage) {
    console.log('Hello Seths map Page');

    // var tile_source = new ol.source.OSM() ;
    let new_map: any;
    if ( this.olMap == undefined ) {
      let my_events: any = {
            map: ['pointermove', 'mousemove', 'click', 'singleclick', 'zoomed'],
            layers: [ 'mousemove', 'click', 'pointermove', 'singleclick' ]
      };

      // Openlayers layers are saved in the layer metadata
      let olLayers: any = [] ;
      for ( let lKey in this.layer_metadata ) {
        olLayers.push(this.layer_metadata[lKey].olLayer) ;
      }
      new_map = new ol.Map({
        interactions: ol.interaction.defaults({mouseWheelZoom:false}),
        layers: olLayers,
        target: map.nativeElement,
        view: new ol.View({
              // experiment with 4326 Erddap WW3 BIO works with this
              // projection: 'EPSG:4326',
              // center: ol.proj.transform([lon,lat], 'EPSG:4326', 'EPSG:4326'),
              // axioms MUR2/sst_analysed with this.
              center: ol.proj.transform([lon,lat], 'EPSG:4326', 'EPSG:3857'),
              zoom: start_zoom,
              minZoom: 6,
              events: my_events
            }),
        eventListeners: {
          "zoomed": this.eventListenerZoom,
          "mousemove": this.eventListenerMouseMove
        }
      });
      new_map.on("click", function(evt) {
      // var coord = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
      // var lon = coord[0];
      // var lat = coord[1];
      });
      new_map.on('singleclick', function(e) {
        var hitTolerance;
        var hit = false;
        let features: any = [] ;
        let layers: any = [] ;
        new_map.forEachFeatureAtPixel(e.pixel, function(feature, layer) {
          features.push(feature);
          layers.push(layer) ;
          hit = true;
        }, {
          hitTolerance: hitTolerance
        });
        parentPage.navigateByFeatureInfo(e, features, layers) ;
      });
      if ( !this.platform.is('mobile') ) {
        new_map.on('pointermove', function(e) {
          var hitTolerance;
          var hit = false;
          let features: any = [] ;
          let layers: any = [] ;
          new_map.forEachFeatureAtPixel(e.pixel, function(feature, layer) {
            features.push(feature);
            layers.push(layer) ;
            hit = true;
          }, {
            hitTolerance: hitTolerance
          });
          if ( hit ) {
            parentPage.displayFeatureInfo( e, features[0], layers[0], new_map ) ;
          } else {
            parentPage.removeFeatureInfo( e, new_map ) ;
          }
          //  if(feature && deviceDetector.isDesktop() ) {
          //    var type = 'mousemove' ;
          //    ol3MS.angularDisplayFeatureInfo2(map, type, feature, featurePopup, scope, $compile);
          //  }
        });
        // add this to the map.
        this.featureElement = popup ;
      }
      /*
      this.featurePopup = new ol.Overlay({
        element: this.featureElement,
        positioning: 'bottom-center',
        stopEvent: false
      });
      new_map.addOverlay(this.featurePopup);
      */
      // send out an event object
      let event_obj_init_data: any = { name: "initial_map_data_loaded", "data_loaded": "yes" } ;
      if ( this.mapProvObserver != undefined ) {
        this.mapProvObserver.next(event_obj_init_data);
      }
      this.mapInitialized = true ;
      this.olMap = new_map ;
      }
    else {
      this.olMap.setTarget(map.nativeElement);
      this.featureElement = popup ;
      new_map = this.olMap ;
      if ( !this.platform.is('mobile') ) {
        new_map.on('pointermove', function(e) {
          var hitTolerance;
          var hit = false;
          let features: any = [] ;
          let layers: any = [] ;
          new_map.forEachFeatureAtPixel(e.pixel, function(feature, layer) {
            features.push(feature);
            layers.push(layer) ;
            hit = true;
          }, {
            hitTolerance: hitTolerance
          });
          if ( hit ) {
            parentPage.displayFeatureInfo( e, features[0], layers[0], new_map ) ;
          } else {
            parentPage.removeFeatureInfo( e, new_map ) ;
          }
        });
      }
    }
    return( new_map);
  }
  eventListenerZoom(event) {
    var temp = 1;
    temp++;
  }
  eventListenerMouseMove(event) {
    var temp = 1;
    temp++;
  }
  refreshLayer( layer ) {
    let source: any = layer.getSource();
    // let params: any = source.getParams();
    // params.t = new Date().getMilliseconds();
    // source.updateParams(params);
    source.changed();
  }
}
