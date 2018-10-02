export interface PlatformMatchParams {
    id: string
}

export type PlatformObservationMatchParams = PlatformMatchParams & {
    type: string
}
