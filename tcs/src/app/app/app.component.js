import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { APP_CONFIG_TESTING } from './app.module';
let AppComponent = class AppComponent {
    constructor(config, employeeservice) {
        this.employeeservice = employeeservice;
        this.title = 'tcs';
        this.application = "This is my Angular application";
        // console.log(config);
        this.application = config;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    __param(0, Inject(APP_CONFIG_TESTING))
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map