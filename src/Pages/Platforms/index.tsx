import * as React from 'react'
import { 
    Route, 
    RouteComponentProps, 
    Switch 
} from 'react-router'
import {
    Col,
    // Dropdown,
    // DropdownItem,
    // DropdownMenu,
    // DropdownToggle,
    // Nav,
    // NavItem,
    // NavLink,
    Row
} from 'reactstrap'

import { PlatformList, PlatformMap } from '@app/Features/PlatformMap'

import { 
    paths, 
    regionList 
} from '@app/constants';
import { Region } from '@app/Shared/regions';
import urlParams from '@app/Shared/urlParams'

// import { CurrentConditionsPage } from './currentConditions'
import { PlatformTabs } from './platformTabs'


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
            // tslint:disable-next-line:no-console
            console.log(regions)
        } else {
            regions.push(regionList[0])
        }
        
        return (
            <div>
                <Row>
                    <Col md={{size: true}}>
                        <PlatformMap boundingBox={regions[0].bbox} />
                    </Col>

                    <Col md={{size: true}}>
                        <Switch>
                            <Route path={ paths.platforms.root } exact={true}>
                                <div>
                                    <h2>Platforms in { regions[0].name }</h2>
                                    <PlatformList boundingBox={regions[0].bbox} />
                                </div>
                            </Route>
                            <Route path={ paths.platforms.platform }>
                                <div>Info about selected platform</div>
                            </Route>
                        </Switch>
                    </Col>
                </Row>

                
                <Row>
                    <Col>
                        <Switch>
                            <Route path={ paths.platforms.root} exact={true}>
                                <div>Root</div>
                            </Route>
                            <Route path={ paths.platforms.platform } component={PlatformTabs} />
                        </Switch>
                        
                    </Col>
                </Row>

                {/* <Switch>
                     <Route to={ paths.platforms.platform } component={CurrentConditionsPage} />
                 </Switch> */}
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
