import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/service/image-load.service";
export class ImagesService {
    constructor(imageService) {
        this.imageService = imageService;
        this.imgSet = new Map();
    }
    loadImagesByTypeOrderedByMonth(type) {
        this.imageService.getImagesByType(type).subscribe((response) => {
            console.log("--------------helper");
            this.imgSet = this.imageService.orderByMonth(response);
            console.log(this.imgSet);
            console.log("--------------helper");
        }, (error) => {
            alert(error.message);
        });
        return this.imgSet;
    }
}
ImagesService.ɵfac = function ImagesService_Factory(t) { return new (t || ImagesService)(i0.ɵɵinject(i1.ImageLoadService)); };
ImagesService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ImagesService, factory: ImagesService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImagesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ImageLoadService }]; }, null); })();
//# sourceMappingURL=images.service.js.map