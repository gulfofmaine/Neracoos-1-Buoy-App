export interface OISSTJsonData {
    data: number[][]
    id: string
    units: string
    sst_max: number
    sst_min: number
}

export interface OISSTJson {
    region: string
    SST: OISSTJsonData
    SST_ANOM: OISSTJsonData
    prelim_start_time: string
    end_time: string
}

export interface BoundingBox {
    north: number
    south: number
    east: number
    west: number
}
