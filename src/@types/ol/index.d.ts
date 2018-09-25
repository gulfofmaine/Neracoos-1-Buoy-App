import * as ol from 'ol'

declare module 'ol/proj' {

    export function transform(coordinate: number[], source: string, destination: string): any
    export function transformExtent(extent: number[], source: string, destination: string): [number, number, number, number]
}
