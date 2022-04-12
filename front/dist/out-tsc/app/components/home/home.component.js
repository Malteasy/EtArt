import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../utils/image-controller/image-controller.component";
import * as i3 from "../about/about.component";
import * as i4 from "@angular/common";
function HomeComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-image-controller", 14);
} }
function HomeComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-image-controller", 15);
} }
function HomeComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-image-controller", 16);
} }
function HomeComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-about");
} }
function HomeComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "img", 17);
    i0.ɵɵelementEnd();
} }
export class HomeComponent {
    constructor() {
        this.show = true;
        this.collapsed = true;
        this.active = 1;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 6, consts: [[1, "navbar", "navbar-expand-md", "navbar-light", "bg-light"], [1, "container-fluid"], ["ngbNav", "", "href", "/home", 1, "navbar-brand", 3, "click"], ["type", "button", "aria-controls", "navbarContent", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarContent", 1, "navbar-collapse"], ["ngbNav", "", 1, "navbar-nav", "ms-auto", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], ["ngbNavItem", "", "ngbDropdown", "", 1, "nav-item"], ["id", "navbarDropdown1", "ngbNavLink", "", 1, "nav-link", 3, "click"], ["ngbNavContent", ""], ["id", "1", "ngbNavLink", "", 1, "nav-link", 3, "click"], [4, "ngIf"], [3, "ngbNavOutlet"], ["type", "painting"], ["type", "photography"], ["type", "embroidery"], ["src", "assets/images/home/1.jpg", 1, "home-img"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
        i0.ɵɵlistener("click", function HomeComponent_Template_a_click_2_listener() { return ctx.show = true; });
        i0.ɵɵtext(3, "ET art from the heart");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function HomeComponent_Template_button_click_4_listener() { return ctx.collapsed = !ctx.collapsed; });
        i0.ɵɵelement(5, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5)(7, "ul", 6, 7);
        i0.ɵɵlistener("activeIdChange", function HomeComponent_Template_ul_activeIdChange_7_listener($event) { return ctx.active = $event; });
        i0.ɵɵelementStart(9, "li", 8)(10, "a", 9);
        i0.ɵɵlistener("click", function HomeComponent_Template_a_click_10_listener() { return ctx.show = false; });
        i0.ɵɵtext(11, " Painting ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, HomeComponent_ng_template_12_Template, 1, 0, "ng-template", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "li", 8)(14, "a", 9);
        i0.ɵɵlistener("click", function HomeComponent_Template_a_click_14_listener() { return ctx.show = false; });
        i0.ɵɵtext(15, " Photography ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, HomeComponent_ng_template_16_Template, 1, 0, "ng-template", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "li", 8)(18, "a", 11);
        i0.ɵɵlistener("click", function HomeComponent_Template_a_click_18_listener() { return ctx.show = false; });
        i0.ɵɵtext(19, " Embroidery ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, HomeComponent_ng_template_20_Template, 1, 0, "ng-template", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "li", 8)(22, "a", 9);
        i0.ɵɵlistener("click", function HomeComponent_Template_a_click_22_listener() { return ctx.show = false; });
        i0.ɵɵtext(23, " About ");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(24, HomeComponent_ng_template_24_Template, 1, 0, "ng-template", 10);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵtemplate(25, HomeComponent_div_25_Template, 2, 0, "div", 12);
        i0.ɵɵelement(26, "div", 13);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(8);
        i0.ɵɵadvance(4);
        i0.ɵɵattribute("aria-expanded", !ctx.collapsed);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("collapse", ctx.collapsed);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("activeId", ctx.active);
        i0.ɵɵadvance(18);
        i0.ɵɵproperty("ngIf", ctx.show);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngbNavOutlet", _r0);
    } }, directives: [i1.NgbNavbar, i1.NgbNav, i1.NgbNavItem, i1.NgbDropdown, i1.NgbNavLink, i1.NgbNavContent, i2.ImageControllerComponent, i3.AboutComponent, i4.NgIf, i1.NgbNavOutlet], styles: [".home-img[_ngcontent-%COMP%]{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding-left: 25%;\n    padding-right: 25%;\n    margin-top: 20px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', template: "  <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n    <div class=\"container-fluid\">\n      <a ngbNav class=\"navbar-brand\" href=\"/home\" (click)=\"show = true\">ET art from the heart</a>\n     \n      <button class=\"navbar-toggler\" type=\"button\" aria-controls=\"navbarContent\" [attr.aria-expanded]=\"!collapsed\" aria-label=\"Toggle navigation\" (click)=\"collapsed = !collapsed\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  \n      <div class=\"navbar-collapse\" [class.collapse]=\"collapsed\" id=\"navbarContent\">\n        <ul ngbNav #nav=\"ngbNav\" class=\"navbar-nav ms-auto\" [(activeId)]=\"active\">\n          <li ngbNavItem class=\"nav-item\" ngbDropdown>\n            <a  class=\"nav-link\" id=\"navbarDropdown1\" ngbNavLink (click)=\"show = false\"> \n              Painting\n            </a>\n            <ng-template ngbNavContent>\n              <app-image-controller type=\"painting\"></app-image-controller>\n              <!-- <app-painting [name]=\"helloName\"></app-painting> -->\n            </ng-template>\n          </li>\n  \n          <li ngbNavItem class=\"nav-item\" ngbDropdown>\n            <a  class=\"nav-link\" id=\"navbarDropdown1\" ngbNavLink (click)=\"show = false\"> \n              Photography\n            </a>\n            <ng-template ngbNavContent>\n              <app-image-controller type=\"photography\"></app-image-controller>\n\n              <!-- <app-photography></app-photography> -->\n            </ng-template>\n          </li>\n          <li ngbNavItem class=\"nav-item\" ngbDropdown>\n            <a  class=\"nav-link\" id=\"1\" ngbNavLink (click)=\"show = false\"> \n              Embroidery\n            </a>\n            <ng-template ngbNavContent>\n              <app-image-controller type=\"embroidery\"></app-image-controller>\n            </ng-template>\n          </li>\n  \n          \n          <li ngbNavItem class=\"nav-item\" ngbDropdown>\n            <a  class=\"nav-link\" id=\"navbarDropdown1\" ngbNavLink (click)=\"show = false\"> \n              About\n            </a>\n            <ng-template ngbNavContent>\n              <app-about></app-about>\n            </ng-template>\n          </li>\n        </ul>\n       \n      </div>\n    </div>\n  </nav>\n <div *ngIf=\"show\">\n  <img class=\"home-img\" src=\"assets/images/home/1.jpg\">\n </div>\n  <div [ngbNavOutlet]=\"nav\">\n  \n  </div> \n", styles: [".home-img{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding-left: 25%;\n    padding-right: 25%;\n    margin-top: 20px;\n}"] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=home.component.js.map