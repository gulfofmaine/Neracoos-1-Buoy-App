import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Platform } from 'ionic-angular';

import { GMRIPlatformLayer } from '../../gmri/mapping/gmriPlatformMap';
import { AppConfig } from '../../providers/appconfig/appconfig';
import { ESRIOceanTopoBaseLayer } from '../../gmri/mapping/gmriBaselayerMap';

// import OLMap from 'ol/map'
// import OLView from 'ol/view'
// import OLProj from 'ol/proj'
// import TileLayer from 'ol/layer/Tile'
// import OSM from 'ol/source/OSM'


// import { MappingProvider } from '../../providers/mapping/mapping'

declare var require: any
declare var ol: any

ol = require('openlayers/dist/ol-debug')


@Component({
  selector: 'mini-map',
  templateUrl: 'mini-map.html'
})
export class MiniMapComponent {

  @ViewChild('map') map

  start_zoom: number = 6
  lon: number = -68.7
  lat: number =  43.5
  
  ol_map: ol.Map

  constructor(public appConfig: AppConfig,
              public location: Location,
              public platform: Platform) {
    console.log('Hello MiniMapComponent Component');
  }


  ngOnInit() {
    let icon_path: string = this.location.path()

    let esriOceanTopoLayer = new ESRIOceanTopoBaseLayer('ESRIOceanTopo', true, this.appConfig)
    esriOceanTopoLayer.olLayer = esriOceanTopoLayer.initializeLayer()


    let platformLayer = new GMRIPlatformLayer("PLATFORM", true, this.appConfig)
    platformLayer.olLayer = platformLayer.initializeLayer(icon_path, this.platform, false)
    platformLayer.visibility = true

    this.ol_map = new ol.Map({
      target: this.map.nativeElement,
      layers: [
        esriOceanTopoLayer.olLayer,
        platformLayer.olLayer
      ],
      view: new ol.View({
        center: ol.proj.transform([this.lon, this.lat], 'EPSG:4326', 'EPSG:3857'),
        zoom: this.start_zoom,
        minZoom: 6
      })
    })
    // debugger
  }
}
