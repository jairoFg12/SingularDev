import { Injectable } from '@angular/core';
import { PushObject, Push } from "@ionic-native/push";
import { AppConfig } from "../../app/app.config";
import { Platform } from "ionic-angular";

import * as firebase from 'firebase';

@Injectable()
export class MessagingService {
    private messaging = firebase.messaging();

    constructor(private push: Push, public platform: Platform) {

    }

    init() {
        if (this.platform.is('cordova')) {
            const pushObject: PushObject = this.push.init(AppConfig.pushOptions);

            this.push.hasPermission().then((res: any) => {
                if (res.isEnabled) {
                    console.log('We have permission to send push notifications');

                    pushObject.on('notification').subscribe((notification: any) => console.log('LFD: Received a notification', notification));

                    pushObject.on('registration').subscribe((registration: any) => console.log('LFD: Device registered', registration));

                    pushObject.on('error').subscribe(error => console.error('LFD: Error with Push plugin', error));
                } else {
                    console.log('We do not have permission to send push notifications');
                }
            });
        } else {
            this.messaging.requestPermission()
                .then(() => {
                    console.log('Notification permission granted.');
                    return this.messaging.getToken()
                })
                .then(token => {
                    console.log(token)
                })
                .catch((err) => {
                    console.log('Unable to get permission to notify.', err);
                });
        }
    }
}