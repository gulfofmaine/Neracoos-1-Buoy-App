import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, MenuController } from 'ionic-angular';
import * as Raven from 'raven-js'

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BuoydataMapPage } from '../pages/buoydata-map/buoydata-map' ;
import { PlatformTabsPage } from '../pages/platform-tabs/platform-tabs' ;
import { MarinerTabsPage } from '../pages/mariner-tabs/mariner-tabs' ;
import { WaveGraphPage } from '../pages/wave-graph/wave-graph';
import { NeracoosTabsPage } from '../pages/neracoos-tabs/neracoos-tabs' ;

import { AppConfig } from '../providers/appconfig/appconfig';
import { WaveProvider } from '../providers/wave/wave';
import { WaterlevelProvider } from '../providers/waterlevel/waterlevel';
import { MetProvider } from '../providers/met/met';
// import { PopoverController } from 'ionic-angular';
import { MappingProvider } from '../providers/mapping/mapping';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MarinerTabsPage

  pages: Array<{title: string, component: any}>;

  //layer picker
  toggleStatus: boolean = true ;
  isToggled: any;
  base_options_display: any ;
  filter_type: any ;
  buoyMapPage: any ;
  // end layer picker

  constructor(public platform: Platform,
              public appConfig: AppConfig,
              public waveService: WaveProvider,
              public waterlevelService: WaterlevelProvider,
              public mapService: MappingProvider,
              public events: Events,
              public menuCtrl: MenuController,
              public metService: MetProvider) {
    this.initializeApp();

    // subscribe to the page loading event
    events.subscribe('buoyMapPage:loaded', (page) => {
      this.buoyMapPage = page ;
    });
    // subscribe to the wave service loading
    this.waveService.waveProvUpdates().subscribe( event_obj => {
        console.log( event_obj.name ) ;
        switch (event_obj.name) {
          case "initial_platform_data_loaded":
            this.metService.setBuoySelectionList();
            this.appConfig.initializePlatformParameterList();
            break;
        }
      });
  }



  initializeApp() {
    this.setUpMenuPages();
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // getting preferences is asynchronous so do it now.
      this.appConfig.updateUserPreferences(0);
      this.waveService.initializeData(true);
      this.waterlevelService.initializeData(true);
    });
  }
  // 5-23-2018 remember to add new things to appConfig.initializeInterfaceChoices().
  // 5-15-2018 I've no idea why this worked but it seems to have
  // First the problem was the left menu buttons not working after
  // drawing a chart. This happened when the menus were defined in this
  // file
  // I was going to try putting the left menu in other pages and
  // added this code to make those menus available from appConfig.
  // I did this because import HomePage etc. didn't work when I
  // did them in appConfig. But it does work here.
  // Just making that change and the menu now works. It's magic
  setUpMenuPages() {
    let defaultMenu: Array<{title: string, component: any}>;
    defaultMenu = [
          { title: 'Home', component: HomePage },
          { title: 'Buoy Map', component: BuoydataMapPage },
          { title: 'Platforms', component: PlatformTabsPage },
          { title: 'Waves', component: WaveGraphPage },
          { title: 'List', component: ListPage }
    ];
    let defaultMenuItem: any = {name: 'default', pages: defaultMenu };
    this.appConfig.addMenu(defaultMenuItem) ;

    let marinerMenu: Array<{title: string, component: any}>;
    marinerMenu = [
          { title: 'Home', component: HomePage },
          { title: 'Platforms', component: MarinerTabsPage }
    ];
    let marinerMenuItem: any = {name: 'mariner', pages: marinerMenu };
    this.appConfig.addMenu(marinerMenuItem) ;

    let neracoosMenu: Array<{title: string, component: any}>;
    neracoosMenu = [
          { title: 'Home', component: HomePage },
          { title: 'Buoy Map', component: BuoydataMapPage },
          { title: 'Platforms', component: NeracoosTabsPage }
    ];
    let NeracoosMenuItem: any = {name: 'neracoos', pages: neracoosMenu };
    this.appConfig.addMenu(NeracoosMenuItem) ;
    let NeracoosGMRIMenuItem: any = {name: 'neracoos_gmri', pages: neracoosMenu };
    this.appConfig.addMenu(NeracoosGMRIMenuItem) ;
    // a special item to reset the storage and then enable
    // the IntrepidErddap (default) menu
    let resetMenuItem: any = {name: 'RESET', pages: defaultMenu };
    this.appConfig.addMenu(resetMenuItem) ;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    Raven.captureBreadcrumb({
      data: {
        name: page.name
      },
      message: 'Page opened'
    })
    this.nav.setRoot(page.component);
    this.events.publish('pageChosen:leftmenu', page);
  }
  selectedInterface(item) {
    Raven.captureBreadcrumb({
      data: {
        name: item.name
      },
      message: 'Interface selected'
    })
    if ( item.name == 'reset') {
      this.appConfig.setSelectedInterface( 'default', true ) ;
    } else {
      this.appConfig.setSelectedInterface( item.name, false ) ;
    }
    this.menuCtrl.close();
  }

  getPageName() {
    let view:any = this.nav.getActive() ;
    let pagename:string = "no page yet" ;
    if ( view != undefined ) {
      pagename =  view.name;
    }
    return( pagename) ;
  }
  getPlatformParameterList() {
    return(this.appConfig.getPlatformParameterList());
  }
  updateParameterVisibility(item) {
    this.metService.updateParameterVisibility( item.description, !item.selected);
  }
  updateBuoySelected(item) {
    this.appConfig.updateBuoySelected( item.name, !item.selected);
    this.appConfig.initializePlatformParameterList();
    this.events.publish('buoySelectionChanged:rightmenu', item.name);
  }
  comparisonTapped(event, item) {
    this.appConfig.setPlatformSelected(this.waveService, item.properties.name);
    this.appConfig.initializePlatformParameterList();
    this.events.publish('comparisonTapped:rightmenu', item.properties.name);
  }
  comparisonMenuClosed() {
    this.events.publish('comparisonMenuClosed:rightmenu');
  }
  // filters platform, station
  platformTapped(event, item) {
    this.appConfig.setPlatformSelected(this.waveService, item.properties.name);
    this.events.publish('platformTapped:rightmenu', item.properties.name);
    this.menuCtrl.close();
  }

  tideTapped(event, item) {
    this.appConfig.setTideSelected(this.waterlevelService, item.monitoringlocationidentifier);
    this.menuCtrl.close();
  }

  waveTapped(event, item) {
    this.appConfig.setWaveModelSelected(item.model_id);
    this.menuCtrl.close();
  }
  // end filters platform, station
}
