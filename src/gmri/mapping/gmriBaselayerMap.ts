import {GMRIOpenlayers1Layer} from "../../gmri/mapping/gmri-openlayers1";
declare var require: any;
declare var ol: any;
// declare var view: any;

ol = require('openlayers/dist/ol-debug');
export class ESRIOceanTopoBaseLayer extends GMRIOpenlayers1Layer {

  constructor( name: string, visibility: boolean) {
    super(name, visibility);
  }

  initializeLayer() {
    this.isBaseLayer = true ;
    this.defaultLayer = false ;
    this.showInLegend = false ;
    this.clickable = false ;
    // this.visibility = false ;
    this.legendCheckbox = false ;
    this.opacity = 1.0 ;
    this.sortNumber = 10 ;
    this.type = 'surge';
    this.displayName = "ESRI Ocean Topo Map";
    this.URL = 'http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer';


    this.attribution = new ol.Attribution({
      html: 'Basemap &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>'
      });

    this.source = new ol.source.XYZ({
      attributions: [this.attribution],
      url: this.URL+'/tile/{z}/{y}/{x}'
    }) ;

    let new_layer: any = new ol.layer.Tile({
          source: this.source,
          name: this.name,
          visible: this.visibility
        })
    return( new_layer ) ;
    // this.layers.push( inundationLayer.layer) ;
  }
}
export class ESRIOceanReferenceBaseLayer extends GMRIOpenlayers1Layer {

  constructor( name: string, visibility: boolean) {
    super(name, visibility);
  }

  initializeLayer() {
    this.isBaseLayer = true ;
    this.defaultLayer = false ;
    this.showInLegend = false ;
    this.clickable = false ;
    // this.visibility = false ;
    this.legendCheckbox = false ;
    this.opacity = 1.0 ;
    this.sortNumber = 10 ;
    this.type = 'surge';
    this.displayName = "ESRI Ocean Ref. Map";
    this.URL = 'http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer';

    this.attribution = new ol.Attribution({
      html: 'Basemap &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Ocean_Reference/MapServer">ArcGIS</a>'
      });

    this.source = new ol.source.XYZ({
      attributions: [this.attribution],
      url: this.URL+'/tile/{z}/{y}/{x}'
    }) ;

    let new_layer: any = new ol.layer.Tile({
          source: this.source,
          name: this.name,
          visible: this.visibility
        })
    return( new_layer ) ;
    // this.layers.push( inundationLayer.layer) ;
  }
}
export class MaritimeChartServerBaseLayer extends GMRIOpenlayers1Layer {

  constructor( name: string, visibility: boolean) {
    super(name, visibility);
  }

  initializeLayer() {
    this.isBaseLayer = true ;
    this.defaultLayer = false ;
    this.showInLegend = false ;
    this.clickable = false ;
    // this.visibility = true ;
    this.legendCheckbox = false ;
    this.opacity = 1.0 ;
    this.sortNumber = 10 ;
    this.type = 'surge';
    this.displayName = "Maritime Chart Server";
    this.URL = "http://gis.charttools.noaa.gov/arcgis/rest/services/MCS/ENCOnline/MapServer/exts/Maritime%20Chart%20Server/WMSServer/";

    this.attribution = new ol.Attribution({
      html: 'Basemap &copy; <a href="http://gis.charttools.noaa.gov/arcgis/rest/services/MCS/ENCOnline/MapServer/">Maritime Chart Server</a>'
      });

    this.source = new ol.source.TileWMS({
      attributions: [this.attribution],
      url: this.URL
    });

    let new_layer: any = new ol.layer.Tile({
          source: this.source,
          name: this.name,
          visible: this.visibility
        })
    return( new_layer ) ;
    // this.layers.push( inundationLayer.layer) ;
  }
}
