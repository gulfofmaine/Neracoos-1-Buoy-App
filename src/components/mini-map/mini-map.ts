import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavController, Platform } from 'ionic-angular';

// Custom providers
import { AppConfig } from '../../providers/appconfig/appconfig';
import { WaveProvider } from '../../providers/wave/wave'

import { MarinerTabsPage } from '../../pages/mariner-tabs/mariner-tabs';


// Layers to be displayed in the map
import { GMRIPlatformLayer } from '../../gmri/mapping/gmriPlatformMap';
import { ESRIOceanTopoBaseLayer, ESRIOceanReferenceBaseLayer } from '../../gmri/mapping/gmriBaselayerMap';

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
              public platform: Platform,
              public waveService: WaveProvider,
              public navCtrl: NavController) {
    // console.log('Hello MiniMapComponent Component');
  }

  // Run when component after component is loaded onto the screen
  ngOnInit() {
    let icon_path: string = this.location.path()

    // baselayer
    let esriOceanTopoLayer = new ESRIOceanTopoBaseLayer('ESRIOceanTopo', true, this.appConfig)
    esriOceanTopoLayer.olLayer = esriOceanTopoLayer.initializeLayer()

    // labels
    let esriOceanReferenceLayer = new ESRIOceanReferenceBaseLayer('ESRIOceanReference', true, this.appConfig)
    esriOceanReferenceLayer.olLayer = esriOceanReferenceLayer.initializeLayer()

    let platformLayer = new GMRIPlatformLayer("PLATFORM", true, this.appConfig)
    platformLayer.olLayer = platformLayer.initializeLayer(icon_path, this.platform, false)

    // setup the map
    this.ol_map = new ol.Map({
      target: this.map.nativeElement,
      layers: [
        esriOceanTopoLayer.olLayer,
        esriOceanReferenceLayer.olLayer,
        platformLayer.olLayer
      ],
      view: new ol.View({
        center: ol.proj.transform([this.lon, this.lat], 'EPSG:4326', 'EPSG:3857'),
        zoom: this.start_zoom,
        minZoom: 6
      })
    })

    // configure our click event
    this.ol_map.on('singleclick', (e: ol.MapBrowserPointerEvent) => {
      var hitTolerance
      var hit = false
      var features: any = []
      var layers: any = []

      this.ol_map.forEachFeatureAtPixel(e.pixel, (feature, layer) => {
        features.push(feature)
        layers.push(layer)
        hit = true
      }, {
        hitTolerance: hitTolerance
      })
      this.navigateByfeatureInfo(e, features)
    })
  }

  // sort out if which features are relevant to work with
  navigateByfeatureInfo(e: ol.MapBrowserPointerEvent, features) {
    if (features.length > 0) {
      let location: string
      for (var i = 0; i < features.length; i++) {
        var platform_test = features[i].get('mooring_site_desc')
        if (platform_test != undefined) {
          location = features[i].get('name')
          this.locationClick(location, features[i])
          break
        }
      }
    }
  }

  locationClick(location, feature) {
    switch ( feature.get('program')) {
      case 'NOAA_CLICKOVERENABLED':
        var noaa_url = "http://www.ndbc.noaa.gov/station_page.php?station=" + location ;
        // this.platform.ready().then(() => {
        //   let browser: any = this.iap.create(noaa_url, "_system", "location=true");
        //   browser.show();
        // });
        console.error('Unable to show url: ' + noaa_url)
        break;
      case 'NOAA':
      case 'NERACOOS':
      case 'UMO':
        this.appConfig.setPlatformSelected(this.waveService, location)
        this.navCtrl.popToRoot()

        this.navCtrl.push(MarinerTabsPage)
    }
  }
}
