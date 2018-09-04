import { ComponentFixture, async } from '@angular/core/testing'
import { TestUtils } from '../../test'
import { BuoyDataMapPage} from './buoydata-map'

let fixture: ComponentFixture<BuoyDataMapPage> = null
let instance: any = null

describe('Pages: Bouydata-map', () => {
    beforeEach(async(() => TestUtils.beforeEachCompiler([BuoyDataMapPage]).then(compiled => {
        fixture = compiled.fixture
        instance = compiled.instance
    })))

    it('should create the map page', async(() => {
        expect(instance).toBeTruthy()
    }))
})