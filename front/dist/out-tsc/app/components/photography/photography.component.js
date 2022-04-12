import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/service/image-load.service";
import * as i2 from "../services/images.service";
import * as i3 from "@angular/common";
import * as i4 from "../utils/image-cards/image-cards.component";
function PhotographyComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 4)(1, "button", 5);
    i0.ɵɵlistener("click", function PhotographyComponent_span_0_Template_button_click_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r8); const year_r6 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onClick(year_r6.key, $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const year_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("id", year_r6.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(year_r6.key);
} }
function PhotographyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function PhotographyComponent_ng_template_3_Template(rf, ctx) { }
function PhotographyComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "app-image-cards", 7);
    i0.ɵɵtext(2, "s ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("year", ctx_r5.yearShowing)("images", ctx_r5.images);
} }
export class PhotographyComponent {
    constructor(imageService, imageHelper) {
        this.imageService = imageService;
        this.imageHelper = imageHelper;
        this.active = false;
        this.show = false;
        this.images = undefined;
        this.yearShowing = "";
        this.imgSet = new Map();
        this.clicked = [];
    }
    ngOnInit() {
        this.imageService.getImagesByType("photography").subscribe((response) => {
            this.imgSet = this.imageService.orderByMonth(response);
            console.log(this.imgSet);
        }, (error) => {
            alert(error.message);
        });
    }
    onClick(year, event) {
        var _a;
        const active = "btn btn-outline-dark btn-lg active";
        const notActive = "btn btn-outline-dark btn-lg";
        let app;
        // set the clicked button active
        if (this.clicked.indexOf(year) == -1) {
            // set all other buttons inactive
            this.clicked.forEach(element => {
                this.clicked.splice(this.clicked.indexOf(element), 1);
                app = document.getElementById(element);
                app === null || app === void 0 ? void 0 : app.setAttribute("class", notActive);
                this.show = false;
            });
            this.clicked.push(year);
            app = document.getElementById(year);
            app === null || app === void 0 ? void 0 : app.setAttribute("class", active);
            this.show = true;
            this.yearShowing = year;
            this.images = (_a = this.imgSet) === null || _a === void 0 ? void 0 : _a.get(year);
        }
        else {
            //if clicked twice set button inactive
            this.clicked.forEach(element => {
                this.clicked.splice(this.clicked.indexOf(element), 1);
                app = document.getElementById(element);
                app === null || app === void 0 ? void 0 : app.setAttribute("class", notActive);
                this.show = false;
            });
            app = document.getElementById(year);
            app === null || app === void 0 ? void 0 : app.setAttribute("class", notActive);
            this.show = false;
        }
        console.log(this.clicked);
    }
}
PhotographyComponent.ɵfac = function PhotographyComponent_Factory(t) { return new (t || PhotographyComponent)(i0.ɵɵdirectiveInject(i1.ImageLoadService), i0.ɵɵdirectiveInject(i2.ImagesService)); };
PhotographyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PhotographyComponent, selectors: [["app-photography"]], decls: 7, vars: 6, consts: [["class", "img-inline", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["nullBlock", ""], ["imgBlock", ""], [1, "img-inline"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-lg", 3, "id", "click"], [1, ""], [3, "year", "images"]], template: function PhotographyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PhotographyComponent_span_0_Template, 3, 2, "span", 0);
        i0.ɵɵpipe(1, "keyvalue");
        i0.ɵɵtemplate(2, PhotographyComponent_div_2_Template, 1, 0, "div", 1);
        i0.ɵɵtemplate(3, PhotographyComponent_ng_template_3_Template, 0, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, PhotographyComponent_ng_template_5_Template, 3, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(4);
        const _r4 = i0.ɵɵreference(6);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(1, 4, ctx.imgSet));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.show)("ngIfThen", _r4)("ngIfElse", _r2);
    } }, directives: [i3.NgForOf, i3.NgIf, i4.ImageCardsComponent], pipes: [i3.KeyValuePipe], styles: [".img-inline[_ngcontent-%COMP%]{\n    padding: 20px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PhotographyComponent, [{
        type: Component,
        args: [{ selector: 'app-photography', template: "\n<span *ngFor=\"let year of imgSet | keyvalue\" class=\"img-inline\">\n    <button (click)=\"onClick(year.key, $event)\" type=\"button\" id=\"{{year.key}}\" class=\"btn btn-outline-dark btn-lg\">{{year.key}}</button>\n</span>\n\n<div *ngIf=\"show; then imgBlock else nullBlock\"></div>\n\n<ng-template #nullBlock></ng-template>\n<ng-template #imgBlock>\n\n    <div class=\"\">\n        <app-image-cards [year]=\"yearShowing\" [images]=\"images\"></app-image-cards>s\n    </div>\n</ng-template>\n", styles: [".img-inline{\n    padding: 20px;\n}"] }]
    }], function () { return [{ type: i1.ImageLoadService }, { type: i2.ImagesService }]; }, null); })();
//# sourceMappingURL=photography.component.js.map