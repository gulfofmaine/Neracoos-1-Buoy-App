export class GMRIOpenlayers1Layer {

  defaultLayer: boolean = false ;
  showInLegend: boolean = true ;
  clickable: boolean = true ;
  visibility: boolean ;
  legendCheckbox: boolean = false ;
  opacity: number = 1.0 ;
  sortNumber: number ;
  type: string;
  name: string ;
  displayName: string;
  iconScale: number = 0.5 ;
  iconHighlightScale: number = 0.75 ;
  legendCaption: string ;
  legendColor: string = '#ff0000' ;
  lineWidth: number = 3.0 ;
  legendSymbolURL: string ;
  legendArray: any = [] ;
  URL: string ;
  olLayer: any ;
  source: any;
  attribution: any;
  myDom: any ;
  icon_path: string ;
  show_labels: boolean = false ;
  isLabeledLayer: boolean = false ;
  isBaseLayer: boolean = false ;
  appConfig: any ;


  constructor( name: string, visibility: boolean, appConfig: any) {
    this.name = name ;
    this.visibility = visibility ;
    this.appConfig = appConfig ;
  }


}
