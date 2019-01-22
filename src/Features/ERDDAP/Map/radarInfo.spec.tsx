import { shallow } from "enzyme"
import * as React from "react"

import { RadarInfo } from "./radarInfo"

describe("RadarInfo", () => {
  afterEach(() => {
    fetch.resetMocks()
  })
  it("Loads info from the API only displays update time once info has been recieved", () => {
    fetch.mockResponseOnce(JSON.stringify(response))

    const wrapper = shallow(<RadarInfo />)

    expect(fetch.mock.calls.length).toBe(1)
    expect(wrapper.html()).toBeNull()
  })

  it("Does not explode when the API does not return", () => {
    fetch.mockResponseOnce(JSON.stringify({}))

    const wrapper = shallow(<RadarInfo />)
    expect(fetch.mock.calls.length).toBe(1)
    expect(wrapper.html()).toBeNull()
  })
})

// https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/?f=pjson
// tslint:disable:object-literal-sort-keys
const response = {
  currentVersion: 10.5,
  serviceDescription:
    '<div style=" margin-left: 20px; margin-right: 20px;">\n<b>Last Revised:</b> April 2016\n<br>\n<h4>Map Information</h4>\n\n<p>\nThis nowCOAST&trade; time-enabled map service provides maps of NOAA/National\nWeather Service (NWS) and Office of Oceanic and Atmospheric Research (OAR)\nMulti-Radar/Multi-Sensor (MRMS) mosaics of quality-corrected base reflectivity\nimages across the Contiguous United States (CONUS) as well as Puerto Rico,\nHawaii, Guam and Alaska with a 1 kilometer (0.62 mile) horizontal resolution.\nThe mosaics are compiled by combining regional base reflectivity radar data\nobtained from Weather Surveillance Radar 1988 Doppler (WSR-88D) also known as\nNEXt-generation RADar (NEXRAD) sites across the country operated by the NWS and\nthe Dept. of Defense and also from data from Terminal Doppler Weather Radars\n(TDWR) at major airports. The combined data is then adjusted using a\nquality-control algorithm developed by the NOAA National Severe Storms\nLaboratory (NSSL), and published in both GRIB2 and RGB GeoTIFF formats.\nnowCOAST processes and displays the data from the GRIB2 files. The colors on\nthe map represent the strength of the energy reflected back toward the radar.\nThe reflected intensities (echoes) are measured in dBZ (decibels of z). The\ncolor scale is the same as used in the NWS RIDGE2 map viewer, however dBZ\nvalues are rounded down to the integer during processing in order to improve\ndisplay performance. The radar data itself is updated by the NWS every 10\nminutes during non-precipitation mode, but every 2-6 minutes during\nprecipitation mode. nowCOAST&trade; downloads, processes, and displays the\nlatest mosaics every 4 minutes.\nFor more detailed information about layer update frequency and timing, please reference the \n<a href="//nowcoast.noaa.gov/help/#!section=updateschedule" target="_blank">nowCOAST&trade; Dataset Update Schedule</a>.\n</p> \n\n<h4>Background Information</h4>\n\n<p>\nReflectivity is related to the power, or intensity, of the reflected radiation\nthat is sensed by the radar antenna. Reflectivity is expressed on a logarithmic\nscale in units called dBZ. The "dB" in the dBZ scale is logarithmic and is\nunitless, and is used only to express a ratio. The "Z" is the ratio of the\ndensity of water drops (measured in millimeters raised to the 6th power) in\neach cubic meter (mm^6/m^3). When the "Z" is large (many drops in a cubic\nmeter), the reflected power is large. A small "Z" means little returned energy.\nIn fact, "Z" can be less than 1 mm^6/m^3 and since it is logarithmic, dBZ\nvalues will become negative, as is often the case when the radar is in clear\nair mode and indicated by earth tone colors. dBZ values are related to the\nintensity of rainfall. The higher the dBZ, the stronger the rain rate. A value\nof 20 dBZ is typically the point at which light rain begins. The values of 60\nto 65 dBZ is about the level where 3/4 inch hail can occur. However, a value of\n60 to 65 dBZ does not mean that severe weather is occurring at that location.\nThe base reflectivity is the lowest (1/2 degree elevation angle) reflectivity\nscan from the radar. The source of the base reflectivity mosaics is the NOAA\nMulti-Radar/Multi-Sensor (MRMS) System, which is developed by the NOAA National\nSevere Storms Laboratory (NSSL) and operated by NWS/National Centers for\nEnvironmental Prediction (NCEP) Central Operations (NCO).\n</p>\n\n<h4>Time Information</h4>\n\n<p>\nThis map service is time-enabled, meaning that each individual layer contains\ntime-varying data and can be utilized by clients capable of making map requests\nthat include a time component.\n</p>\n\n<p>\nIn addition to ArcGIS Server REST access, time-enabled OGC WMS 1.3.0 access is\nalso provided by this service.\n</p>\n\n<p>\nThis particular service can be queried with or without the use of a time\ncomponent. If the time parameter is specified in a request, the data or imagery\nmost relevant to the provided time value, if any, will be returned. If the time\nparameter is not specified in a request, the latest data or imagery valid for\nthe present system time will be returned to the client. If the time parameter\nis not specified and no data or imagery is available for the present time, no\ndata will be returned.\n</p>\n\n<p>\nThis service is configured with time coverage support, meaning that the service\nwill always return the most relevant available data, if any, to the specified\ntime value. For example, if the service contains data valid today at 12:00 and\n12:10 UTC, but a map request specifies a time value of today at 12:07 UTC, the\ndata valid at 12:10 UTC will be returned to the user. This behavior allows more\nflexibility for users, especially when displaying multiple time-enabled layers\ntogether despite slight differences in temporal resolution or update frequency.\n</p>\n\n<p>\nWhen interacting with this time-enabled service, only a single instantaneous\ntime value should be specified in each request. If instead a time range is\nspecified in a request (i.e. separate start time and end time values are\ngiven), the data returned may be different than what was intended.\n</p>\n\n<p>\nCare must be taken to ensure the time value specified in each request falls\nwithin the current time coverage of the service. Because this service is\nfrequently updated as new data becomes available, the user must periodically\ndetermine the service\'s time extent. However, due to software limitations, the\ntime extent of the service and map layers as advertised by ArcGIS Server does\nnot always provide the most up-to-date start and end times of available data.\nInstead, users have three options for determining the latest time extent of the\nservice:\n</p>\n\n<ol>\n\t<li>\n\t\tIssue a <b>returnUpdates=true</b> request (ArcGIS REST protocol only)\n\t\tfor an individual layer or for the service itself, which will return\n\t\tthe current start and end times of available data, in epoch time format\n\t\t(milliseconds since 00:00 January 1, 1970). To see an example, click on\n\t\tthe "Return Updates" link at the bottom of the REST Service page under\n\t\t"Supported Operations". Refer to the\n\t\t<a href="http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#//02r3000000w2000000" target="_blank">ArcGIS REST API Map Service Documentation</a>\n\t\tfor more information.\n\t</li>\n\t<li>\n\t\tIssue an Identify (ArcGIS REST) or GetFeatureInfo (WMS) request against\n\t\tthe proper layer corresponding with the target dataset. For raster\n\t\tdata, this would be the "Image Footprints with Time Attributes" layer\n\t\tin the same group as the target "Image" layer being displayed. For\n\t\tvector (point, line, or polygon) data, the target layer can be queried\n\t\tdirectly. In either case, the attributes returned for the matching\n\t\traster(s) or vector feature(s) will include the following:\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<b>validtime</b>: Valid timestamp.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<b>starttime</b>: Display start time.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<b>endtime</b>: Display end time.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<b>reftime</b>: Reference time (sometimes referred to as\n\t\t\t\tissuance time, cycle time, or initialization time).\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<b>projmins</b>: Number of minutes from reference time to valid\n\t\t\t\ttime.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<b>desigreftime</b>: Designated reference time; used as a\n\t\t\t\tcommon reference time for all items when individual reference\n\t\t\t\ttimes do not match.\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<b>desigprojmins</b>: Number of minutes from designated\n\t\t\t\treference time to valid time.\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n\t<li>\n\t\tQuery the nowCOAST&trade; LayerInfo web service, which has been created to\n\t\tprovide additional information about each data layer in a service,\n\t\tincluding a list of all available "time stops" (i.e. "valid times"),\n\t\tindividual timestamps, or the valid time of a layer\'s latest available\n\t\tdata (i.e. "Product Time"). For more information about the LayerInfo\n\t\tweb service, including examples of various types of requests, refer to\n\t\tthe \n\t\t<a href="//nowcoast.noaa.gov/help/#!section=layerinfo" target="_blank">nowCOAST&trade; LayerInfo Help Documentation</a>\n\t</li>\n</ol>\n\n<h4>References</h4>\n<ul>\n  <li>\n    Lin Tang, Jian Zhang, Carrie Langston and John Krause, Kenneth Howard,\n\tValliappa Lakshmanan, 2014: A Physically Based Precipitation\u2013Nonprecipitation\n\tRadar Echo Classifier Using Polarimetric and Environmental Data in a Real-Time\n\tNational System. Weather and Forecasting, 29, 1106\u20131119, doi: 10.1175/WAF-D-13-00072.1.\n\t(Available at <a href="http://journals.ametsoc.org/doi/full/10.1175/WAF-D-13-00072.1" target="_blank">http://journals.ametsoc.org/doi/full/10.1175/WAF-D-13-00072.1</a>).\n  </li>\n  <!--<li>\n    NWS, 2003: NWS Product Description Document for Radar Integrated Display\n\twith Geospatial Elements Version 2- RIDGE2, NWS/SRH, Fort Worth, Texas\n\t(Available at <a href="http://products.weather.gov/PDD/RIDGE_II_PDD_ver2.pdf" target="_blank">http://products.weather.gov/PDD/RIDGE_II_PDD_ver2.pdf</a>).\n  </li>-->\n  <li>\n    NWS, 2013: Radar Images for GIS Software\n\t(<a href="http://www.srh.noaa.gov/jetstream/doppler/gis.htm" target="_blank">http://www.srh.noaa.gov/jetstream/doppler/gis.htm</a>).\n  </li>\n</ul>\n\n</div>\n\n\n\n',
  mapName: "NOAA NWS NEXRAD MRMS Weather Radar Imagery (Time Enabled)",
  description: "",
  copyrightText: "NOAA/NOS/OCS nowCOAST, NOAA/NWS and NOAA/OAR/NSSL",
  supportsDynamicLayers: true,
  layers: [
    {
      id: 0,
      name: "Weather Radar Base Reflectivity Mosaic",
      parentLayerId: -1,
      defaultVisibility: true,
      subLayerIds: [1, 2, 3],
      minScale: 0,
      maxScale: 0
    },
    {
      id: 1,
      name: "Boundary",
      parentLayerId: 0,
      defaultVisibility: false,
      subLayerIds: null,
      minScale: 0,
      maxScale: 0
    },
    {
      id: 2,
      name: "Image Footprints with Time Attributes",
      parentLayerId: 0,
      defaultVisibility: false,
      subLayerIds: null,
      minScale: 0,
      maxScale: 0
    },
    {
      id: 3,
      name: "Image",
      parentLayerId: 0,
      defaultVisibility: true,
      subLayerIds: null,
      minScale: 0,
      maxScale: 0
    }
  ],
  tables: [],
  spatialReference: {
    wkid: 102100,
    latestWkid: 3857
  },
  singleFusedMapCache: false,
  initialExtent: {
    xmin: -2.147838459754624e7,
    ymin: -2.120138702519682e7,
    xmax: 1.8536688722346235e7,
    ymax: 3.3849485567196816e7,
    spatialReference: {
      wkid: 102100,
      latestWkid: 3857
    }
  },
  fullExtent: {
    xmin: -1.9592230379616152e7,
    ymin: 1005764.0187699106,
    xmax: 1.6698750275152247e7,
    ymax: 1.1756787957418703e7,
    spatialReference: {
      wkid: 102100,
      latestWkid: 3857
    }
  },
  timeInfo: {
    timeExtent: [1547303040000, 1547321340000],
    timeReference: null,
    timeRelation: "esriTimeRelationOverlaps",
    defaultTimeInterval: 5,
    defaultTimeIntervalUnits: "esriTimeUnitsMinutes",
    defaultTimeWindow: 0,
    hasLiveData: true
  },
  minScale: 0,
  maxScale: 0,
  units: "esriMeters",
  supportedImageFormatTypes: "PNG32,PNG24,PNG,JPG,DIB,TIFF,EMF,PS,PDF,GIF,SVG,SVGZ,BMP",
  documentInfo: {
    Title: "",
    Author: "",
    Comments: "",
    Subject: "",
    Category: "",
    AntialiasingMode: "None",
    TextAntialiasingMode: "Force",
    Keywords: "Doppler Weather Radar,NEXRAD,MRMS,NSSL,WSR-88D,TDWR,mosaic,base reflectivity,NWS,DOD,FAA"
  },
  capabilities: "Map,Query,Data",
  supportedQueryFormats: "JSON, AMF, geoJSON",
  exportTilesAllowed: false,
  supportsDatumTransformation: true,
  maxRecordCount: 1000,
  maxImageHeight: 4096,
  maxImageWidth: 4096,
  supportedExtensions: "WMSServer"
}
