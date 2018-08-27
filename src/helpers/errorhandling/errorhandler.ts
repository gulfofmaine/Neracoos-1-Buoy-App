import { AlertController, IonicErrorHandler } from 'ionic-angular'
import { Inject, Injectable } from '@angular/core'

@Injectable()
export class GMRIErrorHandler extends IonicErrorHandler {
    constructor(
        @Inject(AlertController) private alerts: AlertController
    ) {
        super()
        console.log('Hello from error handler')
    }

    handleError(error: any): void {
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