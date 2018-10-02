import * as React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
    Dropdown,
    // DropdownItem,
    DropdownMenu,
    DropdownToggle
} from 'reactstrap'

import { 
    paths, 
    StoreState 
} from '@app/constants'

import { humanDataName } from '@app/Shared/dataTypes'
import { urlPartReplacer } from '@app/Shared/urlParams'

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

export class ObservedDropdownBase extends React.Component<Props & ReduxProps, State> {
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
            ).sort((a, b) => humanDataName(a).localeCompare(humanDataName(b))).map((name, index) => {

                const url = urlPartReplacer(
                    urlPartReplacer(paths.platforms.observations, ':id', this.props.platformId),
                    ':type', name)

                return (
                    // <DropdownItem key={index}>{humanDataName(name)}</DropdownItem>
                    <NavLink className="dropdown-item" key={index} to={url}>{humanDataName(name)}</NavLink>
                )
            }
            )

            return (
                <Dropdown nav={true} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav={true} caret={true}>Observations</DropdownToggle>

                    <DropdownMenu>
                        {dropdownItems}
                    </DropdownMenu>
                </Dropdown>
            )
        } else {
            return (null)
        }
    }

    private toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
}

export const ObservedDropdown = connect(mapStateToProps)(ObservedDropdownBase)
