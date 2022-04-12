import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ImageLoadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = environment.apiBaseUrl;
    }
    getImages() {
        return this.httpClient.get(`${this.baseUrl}/images/all`);
    }
    getImagesByType(type) {
        return this.httpClient.get(`${this.baseUrl}/images/find/${type}`);
    }
    addImage(image) {
        return this.httpClient.post(`${this.baseUrl}/images/add`, image);
    }
    addImages(images) {
        return this.httpClient.post(`${this.baseUrl}/images/addAll`, images);
    }
    orderByMonth(images) {
        const imageMap = new Map();
        images.forEach(image => {
            var _a;
            // console.log(image);
            if (!imageMap.has(image.date.split("-")[0])) {
                const year = image.date.split("-")[0];
                // console.log(year);
                imageMap.set(year, []);
                (_a = imageMap.get(year)) === null || _a === void 0 ? void 0 : _a.push(image);
            }
            else {
                const year = image.date.split("-")[0];
                // console.log(year);
                const tempArr = imageMap.get(year);
                tempArr === null || tempArr === void 0 ? void 0 : tempArr.push(image);
                imageMap.set(year, tempArr);
            }
        });
        return imageMap;
    }
}
ImageLoadService.ɵfac = function ImageLoadService_Factory(t) { return new (t || ImageLoadService)(i0.ɵɵinject(i1.HttpClient)); };
ImageLoadService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ImageLoadService, factory: ImageLoadService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageLoadService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=image-load.service.js.map