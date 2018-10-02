import * as React from 'react'
import { connect } from 'react-redux'
import {
    // Card,
    // CardBody,
    // CardHeader,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row
} from 'reactstrap'

// import { LargeTimeSeriesChart } from '@app/components/Charts'
import { StoreState } from '@app/constants'

import { humanDataName } from '@app/Shared/dataTypes'
// import { round } from '@app/Shared/math'

import { Platform } from '../types'

interface Props {
    platformId: string
}

interface ReduxProps {
    platforms: Platform[]
}

function mapStateToProps({ platformData }: StoreState) {
    return {
        platforms: platformData.platforms
    }
}

const initialState = {
    dropdownOpen: false
}

type State = Readonly<typeof initialState>

export class ObservedPlatformConditionsBase extends React.Component<Props & ReduxProps, State> {
    public state: State = initialState

    constructor(props: Props & ReduxProps) {
        super(props)

        this.toggle = this.toggle.bind(this)
    }

    public render() {
        const filteredPlatforms = this.props.platforms.filter((p) => p.id === this.props.platformId)

        if (filteredPlatforms.length > 0) {
            const platform = filteredPlatforms[0]

            const dropdownItems = Array.from(
                new Set(platform.data_types.map((d) => d.data_type))
            ).map((name, index) => 
                <DropdownItem key={index}>{humanDataName(name)}</DropdownItem>
            )
            
            return (
                <div>
                    <Row>
                        <Col>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret={true}>
                                    Observation Types
                                </DropdownToggle>
                                <DropdownMenu>
                                    {dropdownItems}
                                </DropdownMenu>
                            </Dropdown>
                        </Col>

                        <Col>
                            Found platform {platform.id}
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
                <Row>
                    <Col>
                        Unknown stuff
                    </Col>
                </Row>
            )
        }
    }

    private toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
}

export const ObservedPlatformConditions = connect(mapStateToProps)(ObservedPlatformConditionsBase)
