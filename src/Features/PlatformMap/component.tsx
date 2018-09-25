import * as React from 'react'

import { BaseMap, esriLayers } from '@app/components/Map'

export class PlatformMapBase extends React.Component<object, object> {
    constructor(props: any) {
        super(props)
    }

    public render() {
        const layers = [
            esriLayers.EsriOceanBasemapLayer,
            esriLayers.EsriOceanReferenceLayer
        ]

        return (
            <BaseMap lon={-65} lat={42} startZoom={4} layers={layers} />
        )
    }
}

export const PlatformMap = PlatformMapBase
