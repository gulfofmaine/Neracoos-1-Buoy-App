import {GMRIOpenlayers1Layer} from "../../gmri/mapping/gmri-openlayers1";
declare var require: any;
declare var ol: any ;

export class GMRIPlatformLayer extends GMRIOpenlayers1Layer {

  constructor( name: string, visibility: boolean) {
    super(name, visibility);
    this.initializMyDom();
    ol = require('openlayers/dist/ol-debug');
  }

  initializeLayer(icon_path, platform, show_labels) {
    this.icon_path = icon_path ;
    this.defaultLayer = false ;
    this.showInLegend = true ;
    this.clickable = true ;
    // this.visibility = true ;
    this.legendCheckbox = false ;
    this.opacity = 1.0 ;
    this.sortNumber = 10 ;
    this.type = 'surge';
    this.displayName = "Buoy Platforms";
    this.iconScale = 0.5 ;
    this.iconHighlightScale = 0.75 ;
    this.show_labels = show_labels ;
    this.isLabeledLayer = true ;

    this.URL = "http://www.neracoos.org/data/json/monitoringlocations.php?format=geojson";

    this.legendArray['caption'] = 'Buoy Platforms' ;
    this.legendArray['showinlegend'] = '1' ;
    this.legendArray['value'] = 'inundation' ;
    this.legendArray['property'] = 'value' ;
    this.legendArray['scale'] = '1.0' ;
    this.legendArray['highlight_scale'] = '1.75' ;
    this.legendArray['color'] = '#ff0000' ;
    this.legendArray['width'] = '3' ;
    // let symbol_url: string = this.location.prepareExternalURL('/img/symbols/marker_turquoise.png' ) ;
    // this.legendArray['symbol'] = symbol_url ;
    this.legendArray['symbol'] = this.icon_path + '/img/symbols/marker_turquoise.png' ;
    this.legendArray['hover_symbol'] = this.icon_path + '/img/symbols/marker_turquoise.png' ;
    this.legendArray['noimpact'] = this.icon_path + '/img/symbols/noimpact.png' ;
    this.legendArray['overwash'] = this.icon_path + '/img/symbols/overwash.png' ;
    this.legendArray['erosion'] = this.icon_path + '/img/symbols/erosion.png' ;
    this.legendArray['inundation'] = this.icon_path + '/img/symbols/inundation.png' ;

    /*
    this.source = new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      loader: function(extent, resolution, projection) {
         // var proj = projection.getCode();
         var url = this.URL
         var xhr = new XMLHttpRequest();
         xhr.open('GET', url);
         var onError = function() {
           //this.source.removeLoadedExtent(extent);
           var temp = 'temp';
         }
         xhr.onerror = onError;
         xhr.onload = function() {
           if (xhr.status == 200) {
             this.source.addFeatures(
                 this.source.getFormat().readFeatures(xhr.responseText));
           } else {
             onError();
           }
         }
         xhr.send();
       },
       strategy: ol.loadingstrategy.bbox
     });
     */
    this.source = new ol.source.Vector({
        url: this.URL,
        // this isn't in the docs it seems
        // projection: 'EPSG:3857',
        format: new ol.format.GeoJSON()
        // attribution = this.attribution
    });

    let new_layer: any = new ol.layer.Vector({
      title: this.name,
      name: this.name,
      displayName: this.displayName,
      active: true,
      source: this.source,
      visible: this.visibility ,
      opacity: this.opacity,
      style: this.createPointLineStyleFunction(this, platform)
    })
    return( new_layer ) ;
    // this.layers.push( inundationLayer.layer) ;
  }
  // Points and lines
  // remember if you change this you need to also look at gmriStyleIcon
  createPointLineStyleFunction(parent, platform) {
    return function(feature, resolution) {
      // check for buoy having wave height. That's what we're interested in.
      var data_depths = feature.get('data_depths') ;
      // if there weren't any data depths at all (not a buoy layer) or
      // no waves were found if we did have them then don't show anything.
      if ( data_depths == undefined ||
              data_depths.significant_height_of_wind_and_swell_waves != undefined )
        {
        var styled = parent.featureStyling(feature,parent ) ;
        var scaled = styled['scale'];
        var img_icon = styled['img_icon'];

        var lc = parent.lineColorFunction(parent) ;
        var lw = parent.lineWidthFunction(parent) ;
        // if it's not a browser (ie it probably doesn't hover) then add text
        var icon_label = null;
        if ( parent.show_labels ) {
          if ( platform.is('mobile') ) {
            icon_label = parent.createTextStyle(feature, resolution, parent.myDom.points, 'hover') ;
          } else {
            icon_label = parent.createTextStyle(feature, resolution, parent.myDom.points, 'default') ;
          }
        }
        // This is for the legend and giving the user checkboxes based on
        // the icons, seining, jigging etc. figure it out later.
        // if (cbass_layer_visibility[actype] == 'checked') {
        var style = new ol.style.Style({
          image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
            anchor: [0.0, 0.0],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            // size: [radius,radius],
            scale: scaled,
            // test
            projection: 'EPSG:4326',
            src: img_icon
          })),
          stroke: new ol.style.Stroke({color: lc, width: lw}),
          text: icon_label
          /*
          image: new ol.style.Circle({
            radius: 10,
            fill: new ol.style.Fill({color: 'rgba(255, 0, 0, 0.1)'}),
            stroke: new ol.style.Stroke({color: 'red', width: 1})
          }),
          */
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
  featureStyling(feature, parent) {
    var styled = [];
    var radius = feature.get('radius');
    if ( radius == undefined ) {
      radius = 1 ;
    }
    var scale = this.iconImageScale();
    // use this as a default
    var img_icon = this.iconImageFunction(feature);


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

    return new ol.style.Text({
      textAlign: align,
      textBaseline: baseline,
      font: font,
      text: this.getText(feature, resolution, dom, styleFor),
      fill: new ol.style.Fill({color: fillColor}),
      stroke: new ol.style.Stroke({color: outlineColor, width: outlineWidth}),
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
        var feature_value = feature.get('name');
        if ( typeof feature_value !== 'string' ) {
          text = feature_value.toString();
        } else {
          text = feature_value ;
        }
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
  iconImageFunction(feature) {
    let program: string = feature.get('program') ;
    let icon_img : string = this.legendArray['symbol'] ;
    switch ( program ) {
      case 'NERACOOS':
        icon_img = this.icon_path + "/img/symbols/symbol_neracoos.png" ;
        break;
      case 'NOAA':
      case 'noaa_buoy':
        icon_img = this.icon_path + "/img/symbols/symbol_noaa.png" ;
        break;
      case 'NERACOOS Long Is. Sound':
      case 'lisicos_boy':
        icon_img = this.icon_path + "/img/symbols/symbol_neracoos.png" ;
        break;
      case 'UNH Buoy':
      case 'CDIP':
        icon_img = this.icon_path + "/img/symbols/symbol_neracoos.png" ;
        break;
      case 'NERRS':
        icon_img = this.icon_path + "/img/symbols/symbol_nerrs.gif" ;
        break;
      case 'CMAN':
      case 'noaa_cman':
        icon_img = this.icon_path + "/img/symbols/symbol_cman.gif" ;
        break;
      case 'COOA':
      case 'GoMOOS':
        icon_img = this.icon_path + "/img/symbols/symbol_gomoos.gif" ;
        break;
      case 'Bowdoin':
      case 'BOWDOIN':
        icon_img = this.icon_path + "/img/symbols/symbol_neracoos.png" ;
        break;
      case 'SmartBay':
      case 'SmartAtlantic':
      case 'env_can':
        icon_img = this.icon_path + "/img/symbols/symbol_EC.gif" ;
        break;
      case 'URI':
      case 'MVCO':
        icon_img = this.icon_path + "/img/symbols/symbol_mvco.gif" ;
        break;
      case 'NOS':
        icon_img = this.icon_path + "/img/symbols/symbol_tide.gif" ;
        break;
      case 'USGS':
        icon_img = this.icon_path + "/img/symbols/symbol_tide_white.gif" ;
        break;
      case 'NWS':
        icon_img = this.icon_path + "/img/symbols/symbol_tide_orange.gif" ;
        break;
      default:
        icon_img = this.legendArray['symbol'] ;
        break;
    }
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
        offsetX: '5',
        offsetY: '-8',
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
