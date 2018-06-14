import {GMRIOpenlayers1Layer} from "../../gmri/mapping/gmri-openlayers1";

declare var require: any;
declare var ol: any;
// declare var view: any;

ol = require('openlayers/dist/ol-debug');
export class GMRIOISSTLayer extends GMRIOpenlayers1Layer {
  date: any ;

  constructor( name: string, visibility: boolean, appConfig: any) {
    super(name, visibility, appConfig);
  }

  initializeLayer() {
    this.isWMSLayer = true ;
    this.defaultLayer = false ;
    this.showInLegend = false ;
    this.clickable = false ;
    this.visibility = false ;
    this.legendCheckbox = false ;
    this.opacity = 0.7 ;
    this.sortNumber = 11 ;
    this.type = 'sst';
    this.displayName = "OISST";
    // https://www.ncei.noaa.gov/thredds/wms/ncFC/fc-oisst-daily-avhrr-only-dly-prelim/OISST_Preliminary_Daily_AVHRR-only_Feature_Collection_best.ncd?service=WMS&version=1.3.0&request=GetCapabilities
    // this.URL = 'https://www.ncei.noaa.gov/thredds/wms/ncFC/fc-oisst-daily-avhrr-only-dly/OISST_Daily_AVHRR-only_Feature_Collection_best.ncd';
    this.URL = 'https://www.ncei.noaa.gov/thredds/wms/ncFC/fc-oisst-daily-avhrr-only-dly-prelim/OISST_Preliminary_Daily_AVHRR-only_Feature_Collection_best.ncd'
    // Not happy with straight Date();
    // The value "2018-05-31T15:04:40.552Z" is not valid for the TIME dimension
    // this.date = new Date(1525996800000);
    // this.date = new Date();
    this.date = new Date("2018-06-02T00:00:00.000Z") ;
    this.colorscalerange = '-5,35';

    this.attribution = new ol.Attribution({
      html: 'OISST'
      });

    this.source =  new ol.source.ImageWMS(({
            //url: 'http://www.ncdc.noaa.gov/thredds/wms/OISST-V2-AVHRR_agg_combined',
						url: this.URL,
            params: {
                version:'1.3.0',
                layers: 'sst',
                time: this.date.toISOString(),
                //time: '2017-03-01T00:00:00.000Z',
                elevation: '0.0',
                transparent:'true',
                COLORSCALERANGE: this.colorscalerange ,
                STYLES:'boxfill/rainbow',
            },
            serverType: 'geoserver',
            ratio:1
        }));
    //Create SST Layer
    let new_layer: any = new ol.layer.Image({
        source: this.source,
        name: this.name,
        visible: this.visibility
    });
    return( new_layer ) ;
    // this.layers.push( inundationLayer.layer) ;
  }
  getLegendURL() {
    // http://www.ncei.noaa.gov/thredds/wms/ncFC/fc-oisst-daily-avhrr-only-dly/OISST_Daily_AVHRR-only_Feature_Collection_best.ncd?REQUEST=GetLegendGraphic&LAYER=ice&PALETTE=rainbow
    let url: string = 'http://www.ncei.noaa.gov/thredds/wms/ncFC/fc-oisst-daily-avhrr-only-dly/OISST_Daily_AVHRR-only_Feature_Collection_best.ncd?REQUEST=GetLegendGraphic&LAYER=sst&PALETTE=rainbow' ;
    url += '&colorscalerange=' + this.colorscalerange;
    return(url);
  }
}

export class AXIOMMUR2_analysedSSTLayer extends GMRIOpenlayers1Layer {
  date: any ;

  constructor( name: string, visibility: boolean, appConfig: any) {
    super(name, visibility, appConfig);
  }

  initializeLayer() {
    this.isWMSLayer = true ;
    this.defaultLayer = false ;
    this.showInLegend = false ;
    this.clickable = false ;
    this.visibility = false ;
    this.legendCheckbox = false ;
    this.opacity = 0.7 ;
    this.sortNumber = 11 ;
    this.type = 'sst';
    this.displayName = "MUR2 analyzed SST";
    this.URL = 'https://data.axds.co/ncWMS/wms';
    this.useTextLegendTitle = true ;
    // Not happy with straight Date();
    // The value "2018-05-31T15:04:40.552Z" is not valid for the TIME dimension
    // this.date = new Date(1525996800000);
    this.date = new Date() ;
    this.colorscalerange = '272.039,303.7058';

    this.attribution = new ol.Attribution({
      html: 'MUR2 SST  Sea Surface Foundation Temperature'
      });

    // this.source = new ol.source.TileWMS({
    //  attributions: [this.attribution],
   //   url: this.URL
   // });

    this.source = new ol.source.TileWMS({
        url: this.URL,
        params: {'LAYERS': 'MUR2/analysed_sst',
             'TILED': true,
              colorscalerange: this.colorscalerange}
        // serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        // transition: 0
    });

    let new_layer: any = new ol.layer.Tile({
          source: this.source,
          name: this.name,
          visible: this.visibility
        })
    return( new_layer ) ;
    // this.layers.push( inundationLayer.layer) ;
  }
  getLegendURL() {
    //https://data.axds.co/ncWMS/wms?request=GetLegendGraphic&version=1.0.0&format=image%2Fpng&strict=false&transparent=true&layer=MUR2%2Fanalysed_sst&horizontal=true&showlabel=false&style=boxfill%2Frainbow&palette=rainbow&units=degree_Fahrenheit&logscale=false&colorscalerange=297.039%2C305.372
    let url: string = 'https://data.axds.co/ncWMS/wms?request=GetLegendGraphic&version=1.0.0&format=image/png&strict=false&transparent=true&layer=MUR2/analysed_sst&horizontal=true&showlabel=false&style=boxfill%2Frainbow&palette=rainbow&units=degree_Fahrenheit&logscale=false' ;
    url += '&colorscalerange=' + this.colorscalerange;
    return(url);
  }

}

export class GMRIWW3BIOLayer extends GMRIOpenlayers1Layer {

  constructor( name: string, visibility: boolean, appConfig: any) {
    super(name, visibility, appConfig);
  }

  initializeLayer() {
    this.isWMSLayer = true ;
    this.defaultLayer = false ;
    this.showInLegend = false ;
    this.clickable = false ;
    this.visibility = false ;
    this.legendCheckbox = false ;
    this.opacity = 0.7 ;
    this.sortNumber = 11 ;
    this.type = 'sst';
    this.displayName = "Wave Watch 3 BIO";
    this.URL = 'http://www.neracoos.org/erddap/wms/WW3_GulfOfMaine_latest/request';
    this.date = new Date();

    this.attribution = new ol.Attribution({
      html: 'MUR2 SST  Sea Surface Foundation Temperature'
      });

    // this.source = new ol.source.TileWMS({
    //  attributions: [this.attribution],
   //   url: this.URL
   // });
    this.source = new ol.source.TileWMS({
        url: this.URL,
        params: {'LAYERS': 'WW3_GulfOfMaine_latest:hs', 'TILED': true},
        // time: '2018-05-31T18:00:00Z',
        time: this.date.toISOString(),
        transparent:'true'
        // serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        // transition: 0
    });

    let new_layer: any = new ol.layer.Tile({
          source: this.source,
          name: this.name,
          visible: this.visibility
        })
    /*
    this.source = new ol.source.ImageWMS(({
          //url: 'http://www.ncdc.noaa.gov/thredds/wms/OISST-V2-AVHRR_agg_combined',
          url: this.URL,
          params: {
              // version:'1.3.0',
              time: this.date.toISOString(),
              time: '2018-05-31T18:00:00Z',
              layers: 'WW3_GulfOfMaine_latest',
              transparent:'true',
              // crs: 'EPSG:4326'
              // "COLORSCALERANGE": "-10,10",
              // STYLES:'boxfill/redblue'
          },
          // serverType: 'geoserver',
          ratio:1
      }))

    let new_layer: any = new ol.layer.Image({
          source: this.source,
          name: this.name,
          visible: this.visibility
        })
    */
    return( new_layer ) ;
    // this.layers.push( inundationLayer.layer) ;
  }
  getLegendURL() {
    // http://www.neracoos.org/erddap/griddap/WW3_GulfOfMaine_latest.png?hs[(2018-06-02T00:00:00Z)][][]&.legend=Only
    let url: string = 'http://www.neracoos.org/erddap/griddap/WW3_GulfOfMaine_latest.png?hs[(' ;
    url += this.date.toISOString() + ')][][]&.legend=Only';
    return(url);
  }
}
