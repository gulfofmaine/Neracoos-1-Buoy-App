import { ComponentFixture, async } from '@angular/core/testing'
import { TestUtils } from '../../test'
import { BuoydataMapPage } from './buoydata-map'

let fixture: ComponentFixture<BuoydataMapPage> = null
let instance: any = null

describe('Pages: Bouydata-map', () => {
    beforeEach(async(() => TestUtils.beforeEachCompiler([BuoydataMapPage]).then(compiled => {
        fixture = compiled.fixture
        instance = compiled.instance
    })))

    it('should create the map page', async(() => {
        expect(instance).toBeTruthy()
    }))
})