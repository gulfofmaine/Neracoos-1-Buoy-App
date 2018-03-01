import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MappingProvider } from '../../providers/mapping/mapping';
/**
 * Generated class for the LayerPickerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-layer-picker',
  templateUrl: 'layer-picker.html',
})
export class LayerPickerPage {

  toggleStatus: boolean = true ;
  isToggled: any;
  labeled_options_display: any ;
  base_options_display: any ;
  filter_type: any ;
  parent: any ;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController,
              public mapService: MappingProvider) {

      this.filter_type = navParams.get('filter_type');
      this.parent = navParams.get('parent');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LayerPickerPage');
    this.labeled_options_display = this.getOptionsDisplay('labeled');
    this.base_options_display = this.getOptionsDisplay('base');
  }
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
    let olLayer: any = this.parent.getFeatureLayer(layer.name);
    let visible: boolean = olLayer.getVisible() ;
    olLayer.setVisible(!visible);
    this.mapService.toggleLayerVisibility(layer.name)
  }
  updateLabelVisibility(layer) {
    this.mapService.toggleLayerLabelVisibility(layer.name) ;
    let olLayer: any = this.parent.getFeatureLayer(layer.name);
    this.mapService.refreshLayer( olLayer );
  }
  updateOpacity(layer) {
    let olLayer: any = this.parent.getFeatureLayer(layer.name);
    let opacity: number = layer.opacity / 100 ;
    olLayer.setOpacity(opacity);
  }

}
