import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
export class ModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.closeResult = '';
    }
    ngOnInit() {
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(i0.ɵɵdirectiveInject(i1.NgbActiveModal)); };
ModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["app-modal"]], inputs: { year: "year", image: "image" }, decls: 7, vars: 5, consts: [[1, "modal-body"], [2, "width", "100%", 3, "src"], [1, "description"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 3)(5, "button", 4);
        i0.ɵɵlistener("click", function ModalComponent_Template_button_click_5_listener() { return ctx.activeModal.close("Close click"); });
        i0.ɵɵtext(6, "Close");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate4("src", "assets/images/", ctx.image == null ? null : ctx.image.type, "/", ctx.year, "/", ctx.image == null ? null : ctx.image.name, ".", ctx.image == null ? null : ctx.image.suffix, "", i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.image == null ? null : ctx.image.description, " ");
    } }, styles: [".description[_ngcontent-%COMP%]{\n    padding: 20px;\n    font-size: large;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{ selector: 'app-modal', template: "<div class=\"modal-body\">\n  <img style=\"width: 100%;\" src=\"assets/images/{{image?.type}}/{{year}}/{{image?.name}}.{{image?.suffix}}\">\n\n  <div class=\"description\">\n    {{image?.description}} \n  </div>\n</div>\n\n\n<div class=\"modal-footer\">\n \n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>", styles: [".description{\n    padding: 20px;\n    font-size: large;\n}"] }]
    }], function () { return [{ type: i1.NgbActiveModal }]; }, { year: [{
            type: Input
        }], image: [{
            type: Input
        }] }); })();
//# sourceMappingURL=modal.component.js.map