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

const GulfOfMaine: Region = {
  bbox: {
    east: -65.375,
    north: 45.125,
    south: 40.375,
    west: -70.975,
  },
  name: "Gulf Of Maine",
  slug: "GOM",
}

const LongIslandSound: Region = {
  bbox: {
    east: -71.625,
    north: 41.483,
    south: 40.697,
    west: -73.943,
  },
  name: "Long Island Sound",
  slug: "LONG",
}

const GreatBay: Region = {
  bbox: {
    east: -70.637,
    north: 43.158,
    south: 43.012,
    west: -70.881,
  },
  name: "Great Bay, NH",
  slug: "GREAT",
}

const Boston: Region = {
  bbox: {
    east: -70.809,
    north: 42.443,
    south: 42.211,
    west: -71.145,
  },
  name: "Boston Harbor",
  slug: "BOSTON",
}

const CapeCod: Region = {
  bbox: {
    east: -69.837,
    north: 42.108,
    south: 41.389,
    west: -71.059,
  },
  name: "Cape Cod / Buzzards Bay",
  slug: "CAPE",
}

const NarragansettBay: Region = {
  bbox: {
    east: -71.06,
    north: 41.847,
    south: 41.307,
    west: -71.564,
  },
  name: "Narragansett Bay",
  slug: "NARRAGANSETT",
}

const Newfoundland: Region = {
  bbox: {
    east: -52.294,
    north: 51.835,
    south: 46.377,
    west: -59.809,
  },
  name: "Newfoundland",
  slug: "NEWFOUNDLAND",
}

export const regions = {
  Boston,
  CapeCod,
  GreatBay,
  GulfOfMaine,
  InitialRegion,
  LongIslandSound,
  NarragansettBay,
  Newfoundland,
}

export const regionList: Region[] = [
  GulfOfMaine,
  GreatBay,
  Boston,
  CapeCod,
  NarragansettBay,
  LongIslandSound,
  Newfoundland,
]
