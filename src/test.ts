import 'zone.js/dist/long-stack-trace-zone'
import 'zone.js/dist/proxy.js'
import 'zone.js/dist/sync-test'
import 'zone.js/dist/jasmine-patch'
import 'zone.js/dist/async-test'
import 'zone.js/dist/fake-async-test'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { getTestBed, TestBed } from '@angular/core/testing'
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing'
// import { TranslateModule, TranslateService } from '@ngx-translate/core'

import {
    App,
    Config,
    DeepLinker,
    Form,
    IonicModule,
    Keyboard,
    DomController,
    MenuController,
    NavController,
    Platform
} from 'ionic-angular'

import { ConfigMock, PlatformMock } from 'ionic-mocks'


declare const require: any

// Initialize Angular testing envrionment
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
)

// Then find all the tests
const context: any = require.context('./', true, /\.spec\.ts$/)
// load the modules
context.keys().map(context)

export class TestUtils {
    public static beforeEachCompiler(components: Array<any>): Promise<{fixture: any, instance: any}> {
        return TestUtils.configureIonicTestingModule(components)
            .compileComponents().then(() => {
                let fixture: any = TestBed.createComponent(components[0])
                return {
                    fixture,
                    instance: fixture.debugElement.componentInstance
                }
            })
    }

    public static configureIonicTestingModule(components: Array<any>): typeof TestBed {
        return TestBed.configureTestingModule({
            declarations: [
                ...components,
                // TranslatePipeMock,
            ],
            providers: [
                App, Form, Keyboard, DomController, MenuController, NavController,
                { provide: Platform, useFactory: () => PlatformMock.instance() },
                { provide: Config, useFactory: () => ConfigMock.instance() },
                { provide: DeepLinker, useFactory: () => ConfigMock.instance() },
                // { provide: Click}
            ],
            imports: [
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                // TranslateModule
            ]
        })
    }

    public static eventFire(el: any, etype: string): void {
        if (el.fireEvent) {
            el.fireEvent('on' + etype)
        } else {
            let evObj: any = document.createEvent('Events')
            evObj.initEvent(etype, true, false)
            el.dispatchEvent(evObj)
        }
    }
}
