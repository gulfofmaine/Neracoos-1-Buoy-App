// import Raven = require('raven-js')
import * as Raven from 'raven-js'
import { AlertController, IonicErrorHandler } from 'ionic-angular'
import { Inject, Injectable } from '@angular/core'

declare var require
let package_json = require("../../../package.json")

Raven.config('https://eab04522f42c4efab9d5bfe7d8594e9c@sentry.io/1270344',
    { release: package_json.version}).install()

@Injectable()
export class GMRIErrorHandler extends IonicErrorHandler {
    constructor(
        @Inject(AlertController) private alerts: AlertController
    ) {
        super()
    }

    handleError(error: any): void {
        Raven.captureException(error.origionalError || error)

        const alert = this.alerts.create({
            title: 'An Error Has Occured',
            subTitle: 'That did not go as we planned.',
            message: '<p>We probably were unable to load the data you requested.</p><p>If the issue persists please email us. info@neracoos.org</p>',
            enableBackdropDismiss: true,
            buttons: [
                {text: 'Restart',
                 handler: () => {
                     window.location.reload()
                 }}
            ]
        })
        alert.present()
        console.log(error)
        console.log('Hi from error handler!')
        super.handleError(error)
    }
}