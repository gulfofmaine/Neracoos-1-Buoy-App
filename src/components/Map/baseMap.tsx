import * as React from 'react'

// import TileLayer from 'ol/layer/Tile'
import Feature from 'ol/Feature'
import Layer from 'ol/layer/Layer'
import Map from 'ol/Map'
import MapBrowserEvent from 'ol/MapBrowserEvent'
import { transform, transformExtent } from 'ol/proj'
import View from 'ol/View'

import { BoundingBox } from '@app/Shared'

export interface Props {
    boundingBox?: BoundingBox
    lat: number
    lon: number
    layers: Layer[]
    startZoom: number,
    children?: JSX.Element | JSX.Element[] | Array<JSX.Element | undefined>
    onClick?: (feature: Feature) => void
}

export interface State {
    map: any
}

export class BaseMap extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)

        this.state = { map: {}}
        
        this.singleClick = this.singleClick.bind(this)
    }

    public componentDidMount() {
        const { lat, lon, startZoom, layers } = this.props

        const map = new Map({
            layers,
            target: "map",
            view: new View({
                center: transform([lon,  lat], 'EPSG:4326', 'EPSG:3857'),
                zoom: startZoom
            }),
        })

        map.on('singleclick', this.singleClick)

        this.setState({map})

        if (this.props.boundingBox) {
            const { north, south, east, west } = this.props.boundingBox
            const extent = transformExtent([west, south, east, north], 'EPSG:4326', 'EPSG:3857')
            map.getView().fit(extent)

            this.setState({map})
        }
    }

    public componentDidUpdate(previousProps: Props, previousState: State, snapshot) {
        if (this.props.layers !== previousProps.layers ) {
            const map = previousState.map
            const newLayers = new Set(this.props.layers)
            const oldLayers = new Set(previousProps.layers)
            
            const layersDeleting = new Set([...previousProps.layers].filter(x => !newLayers.has(x)))
            const layersAdding = new Set([...this.props.layers].filter(x => !oldLayers.has(x)))

            // tslint:disable:prefer-for-of
            for (let i = 0; i < Array.from(layersDeleting).length; i++) {
                const layer = Array.from(layersDeleting)[i]
                map.removeLayer(layer)
            }

            // tslint:disable:prefer-for-of
            for (let i = 0; i < Array.from(layersAdding).length; i++) {
                const layer = Array.from(layersAdding)[i]
                map.addLayer(layer)
            }

            this.setState({map})
        }

        if (this.props.boundingBox !== previousProps.boundingBox) {
            if (this.props.boundingBox) {
                const map = previousState.map
                const { north, south, east, west } = this.props.boundingBox
                const extent = transformExtent([west, south, east, north], 'EPSG:4326', 'EPSG:3857')
                map.getView().fit(extent)

                this.setState({map})
            }
            
        }
    }

    public render() {
        return (
            <div id="map" style={{width: "100%", minHeight: 400, maxHeight: '80vh'}} />
        )
    }

    private singleClick(event: MapBrowserEvent) {
        // // tslint:disable-next-line:no-console
        // console.log(event)

        // // tslint:disable-next-line:no-debugger
        // debugger

        if (this.props.onClick) {
            event.map.forEachFeatureAtPixel(event.pixel, (feature: Feature, layer: any) => this.props.onClick!(feature))
        }
    }
}
