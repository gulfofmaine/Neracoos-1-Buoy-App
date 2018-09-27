import * as React from 'react'
import { 
    Route, 
    RouteComponentProps, 
    Switch 
} from 'react-router'
import {
    Col,
    Row
} from 'reactstrap'

import { PlatformList, PlatformMap } from '@app/Features/PlatformMap'

import { 
    paths, 
    regionList 
} from '@app/constants';
import { Region } from '@app/Shared/regions';
import urlParams from '@app/Shared/urlParams'

import { PlatformInfo } from './platformInfo'
import { PlatformTabs } from './platformTabs'
import { RootInfo } from './rootInfo'


const initialState = {
    dropdownOpen: false
}

type State = Readonly<typeof initialState>

export class PlatformsPage extends React.Component<RouteComponentProps, State> {
    public state: State = initialState

    constructor(props: any) {
        super(props)

        this.toggle = this.toggle.bind(this)
    }

    public render() {
        const params = urlParams(this.props.location.search)

        let regions: Region[] = []

        if ( params.region !== undefined ) {
            regions = regionList.filter((r) => r.slug === params.region)
        }

        return (
            <div>
                <Row>
                    <Col md={{size: true}}>
                        <PlatformMap boundingBox={regions.length > 0 ? regions[0].bbox :  null} />
                    </Col>

                    <Col md={{size: true}}>
                        <Switch>
                            <Route path={ paths.platforms.root } exact={true}>
                                <div>
                                    <h2>Platforms in { regions.length > 0 ? regions[0].name : '' }</h2>
                                    <PlatformList boundingBox={regions.length > 0 ? regions[0].bbox : null } />
                                </div>
                            </Route>
                            <Route path={ paths.platforms.platform } component={PlatformInfo} />
                        </Switch>
                    </Col>
                </Row>

                <div style={{marginTop: '1rem'}}>
                    <Switch>
                        <Route path={ paths.platforms.observations } component={PlatformTabs} />
                        <Route path={ paths.platforms.forecast } component={PlatformTabs} />
                        <Route path={ paths.platforms.platform } component={PlatformTabs} />
                    
                        <Route path={ paths.platforms.root} exact={true} component={RootInfo} />
                    </Switch> 
                </div>
                
            </div>
            
        )
    }

    private toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
}

export default PlatformsPage
