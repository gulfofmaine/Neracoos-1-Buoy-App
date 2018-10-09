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

import { PlatformList, PlatformMap, PlatformMapLoader } from '@app/Features/PlatformMap'

import { 
    paths, 
    regionList 
} from '@app/constants';
import { Region } from '@app/Shared/regions';
import urlParams from '@app/Shared/urlParams'

import { PlatformInfo } from './platformInfo'
import { PlatformTabs } from './platformTabs'
import { RootInfo } from './rootInfo'


/**
 * Top level platform page. Displays region level platform selection if no platform is selected.
 */
export class PlatformsPage extends React.Component<RouteComponentProps, object> {

    public render() {
        const params = urlParams(this.props.location.search)

        let regions: Region[] = []

        if ( params.region !== undefined ) {
            regions = regionList.filter((r) => r.slug === params.region)
        }

        return (
            <PlatformMapLoader>
                <Row>
                    <Col sm={{size: true}}>
                        <PlatformMap boundingBox={regions.length > 0 ? regions[0].bbox :  null} />
                    </Col>

                    <Col sm={{size: true}}>

                        {/* Show list of platfroms in a region if no platform is selected */}
                        <Switch>
                            <Route path={ paths.platforms.root } exact={true}>
                                <div>
                                    <h2>Platforms in { regions.length > 0 ? regions[0].name : '' }</h2>
                                    <PlatformList boundingBox={regions.length > 0 ? regions[0].bbox : undefined } />
                                </div>
                            </Route>
                            <Route path={ paths.platforms.platform } component={PlatformInfo} />
                        </Switch>

                    </Col>
                </Row>

                <div style={{marginTop: '1rem'}}>

                    {/* Show general platform info if no platform is selected */}
                    <Switch>
                        <Route path={ paths.platforms.observations } component={PlatformTabs} />
                        <Route path={ paths.platforms.forecast } component={PlatformTabs} />
                        <Route path={ paths.platforms.platform } component={PlatformTabs} />
                    
                        <Route path={ paths.platforms.root} exact={true} component={RootInfo} />
                    </Switch> 
                </div>
                
            </PlatformMapLoader>
        )
    }
}

export default PlatformsPage
