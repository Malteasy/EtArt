import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/service/image-load.service";
import * as i2 from "@angular/common";
import * as i3 from "../utils/image-cards/image-cards.component";
function EmbroideryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "span")(2, "button", 4);
    i0.ɵɵlistener("click", function EmbroideryComponent_div_0_Template_button_click_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r8); const year_r6 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onClick(year_r6.key, $event); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const year_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("id", year_r6.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(year_r6.key);
} }
function EmbroideryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function EmbroideryComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "click a button");
} }
function EmbroideryComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "app-image-cards", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("year", ctx_r5.yearShowing)("images", ctx_r5.images);
} }
export class EmbroideryComponent {
    constructor(imageService) {
        this.imageService = imageService;
        this.active = false;
        this.show = false;
        this.images = undefined;
        this.yearShowing = "";
        this.imgSet = new Map();
        this.clicked = [];
    }
    ngOnInit() {
        this.imageService.getImagesByType("embroidery").subscribe((response) => {
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
EmbroideryComponent.ɵfac = function EmbroideryComponent_Factory(t) { return new (t || EmbroideryComponent)(i0.ɵɵdirectiveInject(i1.ImageLoadService)); };
EmbroideryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmbroideryComponent, selectors: [["app-embroidery"]], decls: 7, vars: 6, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["nullBlock", ""], ["imgBlock", ""], ["type", "button", 1, "btn", "btn-outline-dark", "btn-lg", 3, "id", "click"], [1, ""], [3, "year", "images"]], template: function EmbroideryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EmbroideryComponent_div_0_Template, 4, 2, "div", 0);
        i0.ɵɵpipe(1, "keyvalue");
        i0.ɵɵtemplate(2, EmbroideryComponent_div_2_Template, 1, 0, "div", 1);
        i0.ɵɵtemplate(3, EmbroideryComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, EmbroideryComponent_ng_template_5_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(4);
        const _r4 = i0.ɵɵreference(6);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(1, 4, ctx.imgSet));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.show)("ngIfThen", _r4)("ngIfElse", _r2);
    } }, directives: [i2.NgForOf, i2.NgIf, i3.ImageCardsComponent], pipes: [i2.KeyValuePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmbroideryComponent, [{
        type: Component,
        args: [{ selector: 'app-embroidery', template: "<div *ngFor=\"let year of imgSet | keyvalue\">\n   <span>   \n        <button (click)=\"onClick(year.key, $event)\" type=\"button\" id=\"{{year.key}}\" class=\"btn btn-outline-dark btn-lg\">{{year.key}}</button>\n   </span>\n</div>\n\n<div *ngIf=\"show; then imgBlock else nullBlock\"></div>\n\n<ng-template #nullBlock>click a button</ng-template>\n<ng-template #imgBlock>\n\n    <div class=\"\">\n        <app-image-cards [year]=\"yearShowing\" [images]=\"images\"></app-image-cards>\n    </div>\n</ng-template>\n", styles: [""] }]
    }], function () { return [{ type: i1.ImageLoadService }]; }, null); })();
//# sourceMappingURL=embroidery.component.js.map