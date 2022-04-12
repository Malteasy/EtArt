import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AboutComponent, selectors: [["app-about"]], decls: 11, vars: 0, consts: [[1, "card"], ["src", "assets/images/about/MERCY.jpg", "alt", "ET", 2, "width", "100%"], [1, "title"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵelementStart(2, "h1");
        i0.ɵɵtext(3, "Eda Topac");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p", 2);
        i0.ɵɵtext(5, "Master Student of bla bla");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, "Berlin");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p")(9, "button");
        i0.ɵɵtext(10, "Contact");
        i0.ɵɵelementEnd()()();
    } }, styles: [".card[_ngcontent-%COMP%] {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    max-width: 300px;\n    margin: auto;\n    text-align: center;\n    font-family: arial;\n  }\n  \n  .title[_ngcontent-%COMP%] {\n    color: grey;\n    font-size: 18px;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    border: none;\n    outline: 0;\n    display: inline-block;\n    padding: 8px;\n    color: white;\n    background-color: #000;\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n    font-size: 18px;\n  }\n\n  \n  button[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\n    opacity: 0.7;\n  \n  }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutComponent, [{
        type: Component,
        args: [{ selector: 'app-about', template: "<div class=\"card\">\n    <img src=\"assets/images/about/MERCY.jpg\" alt=\"ET\" style=\"width:100%\">\n    <h1>Eda Topac</h1>\n    <p class=\"title\">Master Student of bla bla</p>\n    <p>Berlin</p>\n\n    <p><button>Contact</button></p>\n  </div>", styles: [".card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    max-width: 300px;\n    margin: auto;\n    text-align: center;\n    font-family: arial;\n  }\n  \n  .title {\n    color: grey;\n    font-size: 18px;\n  }\n  \n  button {\n    border: none;\n    outline: 0;\n    display: inline-block;\n    padding: 8px;\n    color: white;\n    background-color: #000;\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n    font-size: 18px;\n  }\n\n  \n  button:hover, a:hover {\n    opacity: 0.7;\n  \n  }  "] }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=about.component.js.map