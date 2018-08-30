import GeoJSON from 'ol/format/GeoJSON'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Fill from 'ol/style/Fill'
import Icon from 'ol/style/Icon'
import Stroke from 'ol/style/Stroke'
import Style from 'ol/style/Style'
import Text from 'ol/style/Text'

import {GMRIOpenlayers1Layer} from "../../gmri/mapping/gmri-openlayers1";

export class GMRIInundationLayer extends GMRIOpenlayers1Layer {

  constructor( name: string, visibility: boolean, appConfig: any) {
    super(name, visibility, appConfig);
    this.initializMyDom();
  }


  initializeInundationLayer(inundationService, icon_path, platform, show_labels) {
    this.icon_path = icon_path ;
    this.defaultLayer = false ;
    this.showInLegend = true ;
    this.clickable = true ;
    // this.visibility = true ;
    this.legendCheckbox = false ;
    this.opacity = 1.0 ;
    this.sortNumber = 10 ;
    this.type = 'surge';
    this.displayName = "Beach Locations";
    this.iconScale = 0.5 ;
    this.iconHighlightScale = 0.75 ;
    this.show_labels = show_labels ;
    this.isLabeledLayer = true ;
    // making this up
    let start_date : any = new Date();
    let end_date: any = new Date();
    // http://cbass.gmri.org//code/cbassobjectjson?lazy=yes&grid=0&from_date=2014-04-23T19:00:00.000Z&to_date=2014-12-02T16:24:10.000Z&year=All%20Years&month=All%20Months&vessels=All%20Vessels&geojson=yes&projectidentifier=INUNDATION&layername=INUNDATION&object_type=projmls&organizationidentifier=GMRI
    this.URL = "http://cbass.gmri.org//code/cbassobjectjson?lazy=yes&grid=0&from_date=";
    this.URL += start_date.toISOString();
    this.URL += "&to_date=" ;
    this.URL += end_date.toISOString();
    this.URL += "&year=All Years&month=All Months&vessels=All Vessels&geojson=yes&projectidentifier=INUNDATION&layername=INUNDATION&object_type=projmls&organizationidentifier=GMRI";

    this.legendArray['caption'] = 'GMRI Inundation' ;
    this.legendArray['showinlegend'] = '1' ;
    this.legendArray['value'] = 'inundation' ;
    this.legendArray['property'] = 'value' ;
    this.legendArray['scale'] = '0.5' ;
    this.legendArray['highlight_scale'] = '0.75' ;
    this.legendArray['color'] = '#ff0000' ;
    this.legendArray['width'] = '3' ;
    // let symbol_url: string = this.location.prepareExternalURL('/img/symbols/marker_turquoise.png' ) ;
    // this.legendArray['symbol'] = symbol_url ;
    this.legendArray['symbol'] = this.icon_path + '/img/symbols/loading.gif' ;
    this.legendArray['hover_symbol'] = this.icon_path + '/img/symbols/marker_turquoise.png' ;
    this.legendArray['noimpact'] = this.icon_path + '/img/symbols/noimpact.png' ;
    this.legendArray['overwash'] = this.icon_path + '/img/symbols/overwash.png' ;
    this.legendArray['erosion'] = this.icon_path + '/img/symbols/erosion.png' ;
    this.legendArray['inundation'] = this.icon_path + '/img/symbols/inundation.png' ;

    this.source = new VectorSource({
        url: this.URL,
        projection: 'EPSG:3857',
        format: GeoJSON()
        // attribution = this.attribution
      });

    let new_layer: any = new VectorLayer({
      title: this.name,
      name: this.name,
      displayName: this.displayName,
      active: true,
      source: this.source,
      visible: this.visibility ,
      opacity: this.opacity,
      style: this.createPointLineStyleFunction(this, inundationService, platform)
    })
    return( new_layer ) ;
    // this.layers.push( inundationLayer.layer) ;
  }
  // Points and lines
  // remember if you change this you need to also look at gmriStyleIcon
  createPointLineStyleFunction(parent, inundationService, platform) {
    return function(feature, resolution) {
      // check for buoy having wave height. That's what we're interested in.
      var data_depths = feature.get('data_depths') ;
      // if there weren't any data depths at all (not a buoy layer) or
      // no waves were found if we did have them then don't show anything.
      if ( data_depths == undefined ||
              data_depths.significant_height_of_wind_and_swell_waves != undefined )
        {
        var styled = parent.featureStyling(feature,parent, inundationService ) ;
        var scaled = styled['scale'];
        var img_icon = styled['img_icon'];

        var lc = parent.lineColorFunction(parent) ;
        var lw = parent.lineWidthFunction(parent) ;
        // if it's not a browser (ie it probably doesn't hover) then add text
        var icon_label = null;
        // no text ever now.
        if ( parent.show_labels ) {
          if ( !platform.is('Desktop') ) {
            icon_label = parent.createTextStyle(feature, resolution, parent.myDom.points, 'hover') ;
            }
        }
        // This is for the legend and giving the user checkboxes based on
        // the icons, seining, jigging etc. figure it out later.
        // if (cbass_layer_visibility[actype] == 'checked') {
        var style = new Style({
          image: new Icon(/** @type {olx.style.IconOptions} */ ({
            anchor: [0.0, 0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            // size: [radius,radius],
            scale: scaled,
            // test
            projection: 'EPSG:4326',
            src: img_icon
          })),
          stroke: new Stroke({color: lc, width: lw}),
          text: icon_label
        });
        if ( style != undefined ) {
          return [style];
        } else {
          return(null);
        }
      }
    else
      {
      return(null);
      }
    };
  }
  // using information from the json map data structure returns
  // and icon and a "scale"
  featureStyling(feature, parent, inundationService) {
    var styled = [];
    var radius = feature.get('radius');
    if ( radius == undefined ) {
      radius = 1 ;
    }
    var scale = this.iconImageScale();
    // use this as a default
    var img_icon = this.iconImageFunction();
    // check for a forecast and use it
    let location_name: string = feature.get('monitoringlocationidentifier');
    if ( location_name == 'FERRY_BEACH' ) {
      var temp = 1;
      temp++;
    }
    let inundObj: any = inundationService.getMonitoringLocation(location_name);
    if ( inundObj != undefined &&  inundObj.stocktonForecast != undefined ) {
      // Use the worst icon of the 3 peaks that the display shows
      let peakCount: number = inundObj.stocktonForecast.peak_count ;
      let highest: number = 0 ;
      for ( var i = 1 ; i < peakCount ; i++ ) {
        if ( inundObj.stocktonForecast.inundation[ peakCount - i] ) {
          highest = 3 ;
        }
        if ( inundObj.stocktonForecast.over_wash[ peakCount - i] ) {
          if ( highest < 2 ) {
            highest = 2;
          }
        }
        if ( inundObj.stocktonForecast.erosion[ peakCount - i] ) {
          if ( highest < 1 ) {
            highest = 1;
          }
        }
      }
      switch( highest ) {
        case 3:
          img_icon = parent.legendArray['inundation'] ;
          break;
        case 2:
          img_icon = parent.legendArray['overwash'] ;
          break;
        case 1:
          img_icon = parent.legendArray['erosion'] ;
          break;
        default:
          img_icon = parent.legendArray['noimpact'] ;
          break;
      }
    }

    var scaled = radius * scale ;
    // make this up for the moment
    styled['scale'] = scaled;
    styled['img_icon'] = img_icon ;
    return (styled);
  }
  // given a feature get it's layer name, or guess it.
  getLayerNameFromFeature( feature ) {
    var layerName = feature.get('layername');
    if ( layerName ==  undefined ) {
      var test = feature.get('mooring_site_desc') ;
      if ( test != undefined ) {
        layerName = 'NERACOOS_BUOY';
      }
    }
    return (layerName);
  }
  // given a feature get it's monitoringlocationidentifier.
  getMonitoringLocationIdentifierFromFeature( feature ) {
    var mlName = feature.get('monitoringlocationidentifier');
    return (mlName);
  }
  // given a feature get it's layer name, or guess it.
  getHoverTextForFeature( feature ) {
    var hover_text = "default text";
    var layerName = feature.get('layername');
    if ( layerName ==  undefined ) {
      var test = feature.get('mooring_site_desc') ;
      if ( test != undefined ) {
        layerName = 'NERACOOS_BUOY';
        hover_text = feature.get('name')  + " - " +
                      feature.get('mooring_site_desc')  + " - "  +
                      feature.get('program') ;
      }
    } else {
        hover_text = feature.get('hover_text');
    }
    return (hover_text);
  }
  createTextStyle(feature, resolution, dom, styleFor) {
    // the example used an element and it's value for each
    // of these dom.align was the element which had a value.
    // I'm keeping things consolidated but changed to
    // a hardcoded object so dom.align now is the value.
    var align = dom.align;
    var baseline = dom.baseline;
    var size = dom.size;
    var offsetX = parseInt(dom.offsetX, 10);
    var offsetY = parseInt(dom.offsetY, 10);
    var weight = dom.weight;
    var rotation = parseFloat(dom.rotation);
    var font = weight + ' ' + size + ' ' + dom.font;
    var fillColor = dom.color;
    var outlineColor = dom.outline;
    var outlineWidth = parseInt(dom.outlineWidth, 10);

    return new Text({
      textAlign: align,
      textBaseline: baseline,
      font: font,
      text: this.getText(feature, resolution, dom, styleFor),
      fill: new Fill({color: fillColor}),
      stroke: new Stroke({color: outlineColor, width: outlineWidth}),
      offsetX: offsetX,
      offsetY: offsetY,
      rotation: rotation
    });
  }
  getText(feature, resolution, dom, styleFor) {
    let text: string;
    var type = dom.text;
    var maxResolution = dom.maxreso;
    switch (styleFor) {
      case 'hover':
        // var text = feature.get('hover_text');
        text = this.getHoverTextForFeature(feature) ;
        break;
      case 'default':
        text = feature.get('name');
        break;
    }

    if (resolution > maxResolution) {
      text = '';
    } else if (type == 'hide') {
      text = '';
    } else if (type == 'shorten') {
      text = text.substr(0,12);
    } else if (type == 'wrap') {
      text = this.stringDivider(text, 16, '\n');
    }

    return text;
  }
  // http://stackoverflow.com/questions/14484787/wrap-text-in-javascript
  stringDivider(str, width, spaceReplacer) {
    if (str.length > width) {
      var p = width;
      for (; p > 0 && (str[p] != ' ' && str[p] != '-'); p--) {
      }
      if (p > 0) {
        var left;
        if (str.substring(p, p + 1) == '-') {
          left = str.substring(0, p + 1);
        } else {
          left = str.substring(0, p);
        }
        var right = str.substring(p + 1);
        return left + spaceReplacer + this.stringDivider(right, width, spaceReplacer);
      }
    }
    return str;
  }
  /// function to determine display icon and size
  // Points
  iconImageFunction() {
    var icon_img = this.legendArray['symbol'] ;
    return (icon_img);
  }
  iconHoverImageFunction() {
    var icon_img = this.legendArray['hover_symbol'] ;
    return (icon_img);
  }
  iconImageScale() {
    var icon_scale = this.legendArray['scale'] ;
    return (icon_scale);
  }
  iconHoverImageScale() {
    var icon_scale = this.legendArray['highlight_scale'] ;
    return (icon_scale);
  }
  lineColorFunction() {
    var color = this.legendArray['color'] ;
    return (color);
  }
  lineWidthFunction() {
    var width = parseInt(this.legendArray['width']);
    return (width);
  }
  initializMyDom() {
    // styling. this is from an example which used groups of html elements to
    // allow a user to define the different parameters.
    // Here I'm just hardcoding them.
    this.myDom = {
      points: {
        text: 'normal',
        align: 'center',
        baseline: 'middle',
        rotation: '0',
        font: 'Arial',
        weight: 'normal',
        size: '12px',
        offsetX: '0',
        offsetY: '-10',
        color: '#aa3300',
        outline: '#ffffff',
        outlineWidth: '3',
        maxreso: '9600'
      },
      lines: {
        text: 'normal',
        align: 'center',
        baseline: 'middle',
        rotation: '0',
        font: 'Arial',
        weight: 'bold',
        size: '12px',
        offsetX: '0',
        offsetY: '0',
        color: 'green',
        outline: '#ffffff',
        outlineWidth: '3',
        maxreso: '9600'
      },
      polygons: {
        text: 'normal',
        align: 'center',
        baseline: 'middle',
        rotation: '0',
        font: 'Verdana',
        weight: 'bold',
        size: '10px',
        offsetX: '0',
        offsetY: '0',
        color: 'blue',
        outline: '#ffffff',
        outlineWidth: '3',
        maxreso: '9600'
      }
    };
  }
}
