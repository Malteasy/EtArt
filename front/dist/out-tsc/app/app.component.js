import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./components/home/home.component";
export class AppComponent {
    constructor() {
        this.title = 'etArt';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-home");
    } }, directives: [i1.HomeComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<app-home></app-home>", styles: [""] }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map