"use strict";(self.webpackChunksrc=self.webpackChunksrc||[]).push([[2220],{"./src/Features/Units/Converter/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return converter}});var esm_exports=__webpack_require__("./node_modules/@sentry/core/esm/exports.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),lib=__webpack_require__("./node_modules/convert-units/lib/index.js"),lib_default=__webpack_require__.n(lib),types=__webpack_require__("./src/Features/Units/types.ts"),DataTypeConversion=function(){function DataTypeConversion(data_type,display_name,source_unit,metric_unit,english_unit,metric_unit_display,english_unit_display){(0,classCallCheck.Z)(this,DataTypeConversion),this.data_type=data_type,this.display_name=display_name,this.source_unit=source_unit,this.metric_unit=metric_unit,this.english_unit=english_unit,this.metric_unit_display=metric_unit_display,this.english_unit_display=english_unit_display}return(0,createClass.Z)(DataTypeConversion,[{key:"convertTo",value:function convertTo(value,unitSystem){var to=this.toUnitSystem(unitSystem);return this.convertFrom(value).to(to)}},{key:"convertToNumber",value:function convertToNumber(value,unitSystem){return Number(this.convertTo(value,unitSystem))}},{key:"convertFrom",value:function convertFrom(value){return lib_default()(value).from(this.source_unit)}},{key:"toUnitSystem",value:function toUnitSystem(unitSystem){var to;if(unitSystem===types.A.metric)to=this.metric_unit;else to=this.english_unit;return to}},{key:"displayName",value:function displayName(unitSystem){return unitSystem===types.A.metric?this.metric_unit_display?this.metric_unit_display:this.metric_unit:this.english_unit_display?this.english_unit_display:this.english_unit}}]),DataTypeConversion}(),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),AirPressureHpa=function(_DataTypeConversion){(0,inherits.Z)(AirPressureHpa,_DataTypeConversion);var _super=(0,createSuper.Z)(AirPressureHpa);function AirPressureHpa(data_type,display_name){var _this;return(0,classCallCheck.Z)(this,AirPressureHpa),(_this=_super.call(this,data_type,display_name,"hPa","hPa","psi")).data_type=data_type,_this.display_name=display_name,_this}return(0,createClass.Z)(AirPressureHpa)}(DataTypeConversion),unitConversion=__webpack_require__("./src/Shared/unitConversion/index.ts"),CardinalDirection=function(_DataTypeConversion){(0,inherits.Z)(CardinalDirection,_DataTypeConversion);var _super=(0,createSuper.Z)(CardinalDirection);function CardinalDirection(data_type,display_name){var _this;return(0,classCallCheck.Z)(this,CardinalDirection),(_this=_super.call(this,data_type,display_name,"degrees","Degrees","Cardinal Direction")).data_type=data_type,_this.display_name=display_name,_this}return(0,createClass.Z)(CardinalDirection,[{key:"convertTo",value:function convertTo(value,unitSystem){switch(unitSystem){case types.A.metric:return value;case types.A.english:return(0,unitConversion.Uj)(value)[1]}}},{key:"convertToNumber",value:function convertToNumber(value,unitSystem){return value}},{key:"displayName",value:function displayName(unitSystem){return unitSystem===types.A.metric?this.metric_unit_display?this.metric_unit_display:this.metric_unit:""}}]),CardinalDirection}(DataTypeConversion),CmsVelocity=function(_DataTypeConversion){(0,inherits.Z)(CmsVelocity,_DataTypeConversion);var _super=(0,createSuper.Z)(CmsVelocity);function CmsVelocity(data_type,display_name){var _this;return(0,classCallCheck.Z)(this,CmsVelocity),(_this=_super.call(this,data_type,display_name,"cm/s","m/s","knot","Meters/Second","Knots")).data_type=data_type,_this.display_name=display_name,_this}return(0,createClass.Z)(CmsVelocity,[{key:"convertFrom",value:function convertFrom(value){return lib_default()(value/100).from("m/s")}}]),CmsVelocity}(DataTypeConversion),Passthrough=function(_DataTypeConversion){(0,inherits.Z)(Passthrough,_DataTypeConversion);var _super=(0,createSuper.Z)(Passthrough);function Passthrough(data_type,display_name,unit,unit_display_name){var _this;return(0,classCallCheck.Z)(this,Passthrough),(_this=_super.call(this,data_type,display_name,unit,unit,unit,unit_display_name,unit_display_name)).data_type=data_type,_this.display_name=display_name,_this.unit=unit,_this.unit_display_name=unit_display_name,_this}return(0,createClass.Z)(Passthrough,[{key:"convertTo",value:function convertTo(value,unitSystem){return value}}]),Passthrough}(DataTypeConversion),Temperature=function(_DataTypeConversion){(0,inherits.Z)(Temperature,_DataTypeConversion);var _super=(0,createSuper.Z)(Temperature);function Temperature(data_type,display_name){var _this;return(0,classCallCheck.Z)(this,Temperature),(_this=_super.call(this,data_type,display_name,"C","C","F","Celsius","Fahrenheit")).data_type=data_type,_this.display_name=display_name,_this}return(0,createClass.Z)(Temperature)}(DataTypeConversion),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),Visibility=function(_DataTypeConversion){(0,inherits.Z)(Visibility,_DataTypeConversion);var _super=(0,createSuper.Z)(Visibility);function Visibility(data_type,display_name){var _this;return(0,classCallCheck.Z)(this,Visibility),(_this=_super.call(this,data_type,display_name,"m","km","nMi","Kilometers","Nautical Miles")).data_type=data_type,_this.display_name=display_name,_this}return(0,createClass.Z)(Visibility,[{key:"convertTo",value:function convertTo(value,unitSystem){return unitSystem===types.A.english?value/1852:(0,get.Z)((0,getPrototypeOf.Z)(Visibility.prototype),"convertTo",this).call(this,value,unitSystem)}}]),Visibility}(DataTypeConversion),WaveHeight=function(_DataTypeConversion){(0,inherits.Z)(WaveHeight,_DataTypeConversion);var _super=(0,createSuper.Z)(WaveHeight);function WaveHeight(data_type,display_name){var _this;return(0,classCallCheck.Z)(this,WaveHeight),(_this=_super.call(this,data_type,display_name,"m","m","ft","Meters","Feet")).data_type=data_type,_this.display_name=display_name,_this}return(0,createClass.Z)(WaveHeight)}(DataTypeConversion),WindSpeed=function(_DataTypeConversion){(0,inherits.Z)(WindSpeed,_DataTypeConversion);var _super=(0,createSuper.Z)(WindSpeed);function WindSpeed(data_type,display_name){var _this;return(0,classCallCheck.Z)(this,WindSpeed),(_this=_super.call(this,data_type,display_name,"m/s","m/s","knot","Meters/Second","Knots")).data_type=data_type,_this.display_name=display_name,_this}return(0,createClass.Z)(WindSpeed)}(DataTypeConversion),AirPressure=function(_DataTypeConversion){(0,inherits.Z)(AirPressure,_DataTypeConversion);var _super=(0,createSuper.Z)(AirPressure);function AirPressure(){return(0,classCallCheck.Z)(this,AirPressure),_super.apply(this,arguments)}return(0,createClass.Z)(AirPressure,[{key:"convertTo",value:function convertTo(value,unitSystem){switch(unitSystem){case types.A.english:return value/33.863886666667;case types.A.metric:return value}}},{key:"convertFrom",value:function convertFrom(value){return lib_default()(value/1e3).from("bar")}}]),AirPressure}(DataTypeConversion),data_types={air_pressure:new AirPressure("air_pressure","Barometric Pressure","mbar","hPa","inches","Millibars","Inches"),air_pressure_at_sea_level:new AirPressureHpa("air_pressure_at_sea_level","Air Pressure"),air_temperature:new Temperature("air_temperature","Air Temperature"),amps:new Passthrough("amps","Amps","counts","Counts"),attenuation:new Passthrough("attenuation","Beam Attenuation","m-1","Per Meter"),average_wave_period:new Passthrough("average_wave_period","Average Wave Period","s","Seconds"),barometric_pressure:new AirPressureHpa("barometric_pressure","Barometric Pressure"),dew_point_temperature:new Temperature("dew_point_temperature","Dewpoint Temperature"),chlorophyll:new Passthrough("chlorophyll","Chlorophyll","chl/m3","Chlorophyll per Cubic Meter"),concentration_of_colored_dissolved_organic_matter_in_sea_water:new Passthrough("concentration_of_colored_dissolved_organic_matter_in_sea_water","Chromophoric Dissolved Organic Matter","ppbQSE","ppbQSE"),count:new Passthrough("count","Count","count","Count"),direction_of_sea_water_velocity:new Passthrough("direction_of_sea_water_velocity","Current Direction","Angular Degrees","Angular Degrees"),dissolved_oxygen:new Passthrough("dissolved_oxygen","Dissolved Oxygen","ml/l","ml/l"),dominant_wave_period:new Passthrough("dominant_wave_period","Dominant Wave Period","s","Seconds"),dominant_wave_period_3:new Passthrough("dominant_wave_period_3","Dominant Wave Period","s","Seconds"),eastward_sea_water_velocity:new CmsVelocity("eastward_sea_water_velocity","East Velocity Component"),eastward_wind:new WindSpeed("eastward_wind","Wind Speed, Zonal"),Ed_PAR:new Passthrough("Ed_PAR","Downwelling Irradiance of PAR","microE/m^2/s","microE/m^2/s"),fractional_saturation_of_oxygen_in_sea_water:new Passthrough("fractional_saturation_of_oxygen_in_sea_water","Percent Oxygen Saturation","percent","percent"),lat_offset:new Passthrough("lat_offset","Latitudinal Offset","Angular Minutes","Angular Minutes"),lon_offset:new Passthrough("lon_offset","Longitudinal Offset","Angular Minutes","Angular Minutes"),max_visibility:new Visibility("max_visibility","Maximum Visibility"),max_wave_height:new WaveHeight("max_wave_height","Maximum Wave Height"),mean_wave_direction:new CardinalDirection("mean_wave_direction","Mean Wave Direction"),min_visibility:new Visibility("min_visibility","Minimum Visibility"),mole_concentration_of_carbon_dioxide_in_air_ppm:new Passthrough("mole_concentration_of_carbon_dioxide_in_air_ppm","Atmospheric Concentration of Carbon Dioxide in Parts Per Million","ppm","ppm"),mole_concentration_of_nitrate_in_sea_water:new Passthrough("mole_concentration_of_nitrate_in_sea_water","Nitrate Concentration","microM","microM"),mole_concentration_of_phosphate_in_sea_water:new Passthrough("mole_concentration_of_phosphate_in_sea_water","Phosphate Concentration","microM/l","microM/l"),moles_of_oxygen_per_unit_mass_in_sea_water_um_kg:new Passthrough("moles_of_oxygen_per_unit_mass_in_sea_water_um_kg","Micro Moles Oxygen per Kilogram of Sea Water","uM/kg","uM/kg"),northward_sea_water_velocity:new CmsVelocity("northward_sea_water_velocity","North Velocity Component"),northward_wind:new WindSpeed("northward_wind","Wind Speed, Meridional"),omega_aragonite:new Passthrough("omega_aragonite","Omega Aragonite - Derived from total alkalinity and pCO2","Omega","Omega"),omega_calcite:new Passthrough("omega_calcite","Omega Calcite - Derived from total alkalinity and pCO2","Omega","Omega"),oxygen_concentration_in_sea_water:new Passthrough("oxygen_concentration_in_sea_water","Oxygen Concentration In Sea Water","mg/L","mg/L"),oxygen_saturation:new Passthrough("oxygen_saturation","Oxygen Saturation","ml/l","ml/l"),par:new Passthrough("par","Photosynthetically Available Radiation","µE/m2/sec","µE/m2/sec"),percent_clear_sky:new Passthrough("percent_clear_sky","Percent Clear Sky","percent","percent"),percent_oxygen_saturation:new Passthrough("percent_oxygen_saturation","Percent Oxygen Saturation","percent","percent"),percent_sun:new Passthrough("percent_sun","Percent Sun","percent","percent"),period:new Passthrough("period","Dominant Wave Period","s","Seconds"),predicted_sea_water_level:new WaveHeight("predicted_sea_water_level","Predicted level of sea water"),pressure_tendency:new Passthrough("pressure_tendency","Pressure Tendency","degrees","Degrees"),relative_humidity:new Passthrough("relative_humidity","Relative Humidity","percent","Percent"),sea_level_pressure:new AirPressureHpa("sea_level_pressure","Sea Level Pressure"),surface_partial_pressure_of_carbon_dioxide_in_sea_water_ppm:new Passthrough("surface_partial_pressure_of_carbon_dioxide_in_sea_water_ppm","Sea Water Concentration of Carbon Dioxide in Parts Per Million","ppm","ppm"),sea_surface_swell_wave_period:new Passthrough("sea_surface_swell_wave_period","Wave Period, Average","s","Seconds"),sea_surface_temperature:new Temperature("sea_surface_temperature","Sea Surface Temperature"),sea_water_temperature:new Temperature("sea_water_temperature","Water Temperature"),sea_surface_wave_significant_height:new WaveHeight("max_wave_height","Wave Height"),sea_surface_wave_from_direction:new CardinalDirection("sea_surface_wave_from direction","Waves from Direction"),sea_surface_wave_to_direction:new CardinalDirection("sea_surface_wave_to_direction","Wave Direction"),sea_water_alkalinity_expressed_as_mole_equivalent:new Passthrough("sea_water_alkalinity_expressed_as_mole_equivalent","Total Alkalinity","microM/kg","microM/kg"),sea_water_density:new Passthrough("sea_water_density","Sigma-T","kg/m^3","Kilograms per cubic meter"),sea_water_electrical_conductivity:new Passthrough("sea_water_electrical_conductivity","Conductivity","siemens/m","siemens/m"),sea_water_level:new WaveHeight("sea_water_level","Sea water level relative to the mean"),sea_water_pH_reported_on_total_scale:new Passthrough("sea_water_pH_reported_on_total_scale","pH","pH Total","pH Total"),sea_water_pressure:new Passthrough("sea_water_pressure","Pressure","decibars","Decibars"),sea_water_salinity:new Passthrough("sea_water_salinity","Salinity","psu","PSU"),sea_water_speed:new CmsVelocity("sea_water_speed","Current Speed"),sea_water_velocity:new CmsVelocity("sea_water_velocity","Current Speed"),sea_water_velocity_m:new DataTypeConversion("sea_water_velocity_m","Sea Water Velocity","m/s","m/s","knot","Meters/Second","Knots"),significant_height_of_wind_and_swell_waves:new WaveHeight("max_wave_height","Significant Wave Height"),significant_height_of_wind_and_swell_waves_3:new WaveHeight("max_wave_height","Significant Wave Height"),significant_wave_height:new WaveHeight("max_wave_height","Significant Wave Height"),solar_zenith_angle:new Passthrough("solar_zenith_angle","Solar Zenith Angle","radians","Radians"),sun_icon:new Passthrough("sun_icon","Sun Icon","1","Sun Icon"),surface_altitude:new WaveHeight("surface_altitude","Water Level"),surface_partial_pressure_of_carbon_dioxide_in_air:new Passthrough("surface_partial_pressure_of_carbon_dioxide_in_air","Atmospheric CO2 Partial Pressure","microATM","microATM"),surface_partial_pressure_of_carbon_dioxide_in_sea_water:new Passthrough("surface_partial_pressure_of_carbon_dioxide_in_sea_water","Sea Surface CO2 Partial Pressure","microATM","microATM"),tendency_of_air_pressure:new AirPressureHpa("tendency_of_air_pressure","Pressure Tendency"),transmissivity:new Passthrough("transmissivity","Transmissivity","percent","percent"),transmissivity_voltage:new Passthrough("transmissivity_voltage","Transmissivity Voltage","percent","percent"),turbidity:new Passthrough("turbidity","Turbidity","ntu","ntu"),visibility_in_air:new Visibility("visibility_in_air","Visibility"),volume_fraction_of_oxygen_in_sea_water:new Passthrough("volume_fraction_of_oxygen_in_sea_water","Dissolved Oxygen","ml/l","ml/l"),wave_direction_spread:new Passthrough("wave_direction_spread","Wave Direction Spread","degrees","Degrees"),wind_direction_kvh:new CardinalDirection("wind_direction_kvh","Mean Wind Direction"),wind_direction_stddev:new Passthrough("wind_direction_stddev","Wind Direction Standard Deviation","degrees","Degrees"),wind_direction_uv:new Passthrough("wind_direction_uv","Unit Vector Mean Wind Direction","degrees","Degrees"),wind_direction_uv_stddev:new Passthrough("wind_direction_uv_stddev","Unit Vector Mean Wind Direction Standard Deviation","degrees","Degrees"),wind_direction_ve:new Passthrough("wind_direction_ve","Vector Averaged Wind Direction","degrees","Degrees"),wind_direction_ve_stddev:new Passthrough("wind_direction_ve_stddev","Vector Averaged Wind Direction Standard Deviation","degrees","Degrees"),wind_from_direction:new CardinalDirection("wind_from_direction","Wind Direction"),wind_gust:new CmsVelocity("wind_gust","Wind Gust"),wind_min:new CmsVelocity("wind_min","Wind Minimum Speed"),wind_peak:new CmsVelocity("wind_peak","Wind Peak"),wind_percent_good:new Passthrough("wind_percent_good","Wind Percent Good","1","Wind Percent Good"),wind_speed_and_direction:new Passthrough("wind_speed_and_direction","Wind Speed and Direction","m/s, degrees","m/s, degrees"),wind_speed_of_gust:new WindSpeed("wind_speed_of_gust","Wind Gust"),wind_speed_sc:new WindSpeed("wind_speed_sc","Scalar Average Wind Speed"),wind_speed_ve:new WindSpeed("wind_speed_ve","Vector Average Wind Speed"),wind_speed:new WindSpeed("wind_speed","Wind Speed")},converter=function converter(data_type){var dataConverter=function possibleConverter(data_type){return data_types[data_type]}(data_type);return dataConverter||(esm_exports.uT("Invalid data type attempting to be converted ".concat(data_type)),new Passthrough("unknown","Unknown Data Type","unknown","Unknown"))}},"./src/Features/Units/types.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return UnitSystem},E:function(){return initialState}});var UnitSystem=function(UnitSystem){return UnitSystem.metric="Metric",UnitSystem.english="English",UnitSystem}({}),initialState={system:UnitSystem.english}},"./src/Shared/math.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function round(num){var significantDigits=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.ceil(num*Math.pow(10,significantDigits))/Math.pow(10,significantDigits)}__webpack_require__.d(__webpack_exports__,{N:function(){return round}})},"./src/Shared/unitConversion/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{En:function(){return convertUnit},Uj:function(){return compassDirection}});var convert_units__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/convert-units/lib/index.js"),convert_units__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(convert_units__WEBPACK_IMPORTED_MODULE_0__),_math__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Shared/math.ts"),unitNames={"Deg C":"C",Meters:"m",celsius:"C",meters:"m"};function conversion(value,from,to){return(0,_math__WEBPACK_IMPORTED_MODULE_1__.N)(convert_units__WEBPACK_IMPORTED_MODULE_0___default()(value).from(function compatabile_name(unit){return unitNames.hasOwnProperty(unit)?unitNames[unit]:unit}(from)).to(to),1)}function convertUnit(unit,value){if(null===unit)return"";switch(unit=unit.toLowerCase()){case"deg c":return" ("+conversion(value,"C","F")+"° F)";case"f":return" ("+conversion(value,"F","C")+"° C)";case"meters":return value<100?" ("+conversion(value,"m","ft")+" feet)":" ("+conversion(value,"m","mi")+" miles)";case"m/s":return" ("+conversion(value,"m/s","knot")+" knots, "+conversion(value,"m/s","m/h")+" mph)";case"knot":return" ("+conversion(value,"knot","m/s")+" m/s, "+conversion(value,"knot","m/h")+" mph)";case"degrees":var direction=compassDirection(value);return direction?" ("+direction[1]+")":"";default:return""}}var spaceBetweenCompassPoints=11.25,compass={1:["North","N"],2:["North by east","NbE"],3:["North-northeast","NNE"],4:["Northeast by north","NEbN"],5:["Northeast","NE"],6:["Northeast by east","NEbE"],7:["East-northeast","ENE"],8:["East by north","EbN"],9:["East","E"],10:["East by south","EbS"],11:["East-southeast","ESE"],12:["Southeast by east","SEbE"],13:["Southeast","SE"],14:["Southeast by south","SEbS"],15:["South-southeast","SSE"],16:["South by east","SbE"],17:["South","S"],18:["South by west","SbW"],19:["South-southwest","SSW"],20:["Southwest by south","SWbS"],21:["Southwest","SW"],22:["Southwest by west","SWbW"],23:["West-southwest","WSW"],24:["West by south","WbS"],25:["West","W"],26:["West by north","WbN"],27:["West-northwest","WNW"],28:["Northwest by west","NWbW"],29:["Northwest","NW"],30:["Northwest by north","NWbN"],31:["North-northwest","NNW"],32:["North by west","NbW"],33:["North","N"]};function compassDirection(degrees){var pointNumber=Math.floor((degrees+spaceBetweenCompassPoints/2)/spaceBetweenCompassPoints)+1;return compass[pointNumber]}}}]);