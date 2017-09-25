import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Autostart } from "@ionic-native/autostart";

import { AngularFireAuth } from "angularfire2/auth";

import { ListProductPage } from '../pages/list-product/list-product';
import { ShoppingPage } from '../pages/shopping/shopping';
import { SupermarketPage } from '../pages/supermarket/supermarket';
import { MessagingService } from "../providers/messagin/messagin-service";
<<<<<<< HEAD
import { LoginPage } from '../pages/login/login';
import { AppConfig } from './app.config';
=======
import { MyMarketListPage } from '../pages/my-market-list/my-market-list'
>>>>>>> 79c2e36e74bdc44748f2626c494e1ce2f80ba06e


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = null;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private afAuth: AngularFireAuth,
    private messagingService: MessagingService,
    private autostart: Autostart) {

    this.initializeApp();

    afAuth.authState.subscribe(user => {

      if (!user) {
        AppConfig.user = null;
        this.rootPage = LoginPage;
        return;
      }
      AppConfig.user = user;
      this.rootPage = ShoppingPage;
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Shopping', component: ShoppingPage },
      { title: 'ListProduct', component: ListProductPage },
      { title: 'Supermarket', component: SupermarketPage },
<<<<<<< HEAD
      { title: 'Login', component: LoginPage }
=======
      { title: 'My List Market', component: MyMarketListPage }
>>>>>>> 79c2e36e74bdc44748f2626c494e1ce2f80ba06e
    ];
  }

  isAuthenticated(): boolean {
    return !!AppConfig.user;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.autostart.enable();
      this.messagingService.init();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
