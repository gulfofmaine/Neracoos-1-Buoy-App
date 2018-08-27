import { storiesOf } from '@storybook/angular'
// import { action } from '@storybook/addon-actions'
import { MiniMapComponent } from '../components/mini-map/mini-map';

storiesOf('Mini Map', module)
    .add('Default', () => ({
        component: MiniMapComponent,
        props: {},
        moduleMetadata: {
            providers: [
                
            ]
        }
    }))
