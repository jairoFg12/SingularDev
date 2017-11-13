import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ProductItemViewComponent } from './product-item-view';
import { NavControllerMock } from 'ionic-mocks';

describe('ProductItemView Component', () => {
    let fixture;
    let component;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductItemViewComponent],
            imports: [
                IonicModule.forRoot(ProductItemViewComponent)
            ],
            providers: [
                { provide: NavController, useFactory: () => NavControllerMock.instance() }
            ]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductItemViewComponent);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component instanceof ProductItemViewComponent).toBe(true);
    });

});