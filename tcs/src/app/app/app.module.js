import { __decorate } from "tslib";
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
export const HERO_DI_CONFIG = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection'
};
export const APP_CONFIG_TESTING = new InjectionToken('Appplication name is DI');
let AppModule = class AppModule {
    constructor() {
    }
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule
        ],
        providers: [
            { provide: APP_CONFIG_TESTING,
                useValue: "Appplication name is DI"
            }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map