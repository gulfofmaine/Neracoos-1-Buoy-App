/**
 * Common regions, and region related types.
 */

export interface BoundingBox {
  north: number
  south: number
  east: number
  west: number
}

export interface Region {
  slug: string
  name: string
  bbox: BoundingBox
}

export const InitialRegion: Region = {
  bbox: {
    east: -65.775,
    north: 45.125,
    south: 40.375,
    west: -73.975,
  },
  name: "Initial Region",
  slug: "initial",
}

const DowneastMaine: Region = {
  bbox: {
    east: -66.0307,
    north: 45.2496,
    south: 42.9925,
    west: -68.5832,
  },
  name: "Downeast Maine",
  slug: "DOWNEAST",
}

const PenobscotBay: Region = {
  bbox: {
    east: -67.9132,
    north: 44.7921,
    south: 42.9798,
    west: -69.4501,
  },
  name: "Penobscot Bay",
  slug: "PENBAY",
}

const MidcoastMaine: Region = {
  bbox: {
    east: -69.1218,
    north: 44.1782,
    south: 43.0892,
    west: -70.0485,
  },
  name: "Midcoast Maine",
  slug: "MIDCOAST",
}

const SouthernMaine: Region = {
  bbox: {
    east: -69.49,
    north: 44.2859,
    south: 43.0702,
    west: -70.7603,
  },
  name: "Southern Maine Coast",
  slug: "SOUTHME",
}

const SeacoastNH: Region = {
  bbox: {
    east: -70.3676,
    north: 43.2703,
    south: 42.6959,
    west: -71.0204,
  },
  name: "Seacoast NH",
  slug: "SEACOAST",
}

const MassBay: Region = {
  bbox: {
    east: -70.019,
    north: 42.6618,
    south: 41.6029,
    west: -71.1897,
  },
  name: "Massachusetts Bay",
  slug: "MASSBAY",
}

const OffshoreGOM: Region = {
  bbox: {
    east: -64.199,
    north: 44.4165,
    south: 39.162,
    west: -70.4649,
  },
  name: "Offshore Gulf of Maine",
  slug: "OFFSHOREGOM",
}

const SoutheastMA: Region = {
  bbox: {
    east: -69.3886,
    north: 42.3492,
    south: 40.8326,
    west: -71.143,
  },
  name: "Southeast Massachusetts",
  slug: "SOUTHEASTMA",
}

const NarraBay: Region = {
  bbox: {
    east: -70.9573,
    north: 41.9614,
    south: 41.3087,
    west: -71.6696,
  },
  name: "Narragansett Bay",
  slug: "NARRBAY",
}

const RISound: Region = {
  bbox: {
    east: -70.5495,
    north: 41.516,
    south: 40.5382,
    west: -71.6805,
  },
  name: "Rhode Island Sound",
  slug: "RISOUND",
}

const LISound: Region = {
  bbox: {
    east: -72.0031,
    north: 41.7588,
    south: 40.1544,
    west: -74.0863,
  },
  name: "Long Island Sound",
  slug: "LISOUND",
}

const NYBight: Region = {
  bbox: {
    east: -71.3516,
    north: 40.9116,
    south: 38.5304,
    west: -74.3516,
  },
  name: "New York Bight",
  slug: "NYBIGHT",
}

export const regions = {
  DowneastMaine,
  PenobscotBay,
  MidcoastMaine,
  SouthernMaine,
  SeacoastNH,
  MassBay,
  OffshoreGOM,
  SoutheastMA,
  NarraBay,
  RISound,
  LISound,
  NYBight,
}

/** Ordered for display in the dropdown menu */
export const regionMenuList: Region[] = [
  DowneastMaine,
  PenobscotBay,
  MidcoastMaine,
  SouthernMaine,
  SeacoastNH,
  MassBay,
  OffshoreGOM,
  SoutheastMA,
  NarraBay,
  RISound,
  LISound,
  NYBight,
]

/** Ordered for left/right display on region pages */
export const regionPageList: Region[] = [
  OffshoreGOM,
  NYBight,
  LISound,
  RISound,
  NarraBay,
  SoutheastMA,
  MassBay,
  SeacoastNH,
  SouthernMaine,
  MidcoastMaine,
  PenobscotBay,
  DowneastMaine,
]
