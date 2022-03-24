import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
const localurl = 'http://localhost:3000';
let TcsServiceService = class TcsServiceService {
    constructor(http) {
        this.http = http;
    }
    get Employees() {
        let url = localurl + '/employees';
        return this.http.get(url);
    }
};
TcsServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TcsServiceService);
export { TcsServiceService };
//# sourceMappingURL=tcs-service.service.js.map