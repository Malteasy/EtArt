import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "@angular/common";
function ImageCardsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "a", 3);
    i0.ɵɵlistener("click", function ImageCardsComponent_div_1_Template_a_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const image_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.open(image_r1); });
    i0.ɵɵelement(2, "img", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate4("src", "assets/images/", image_r1.type, "/", ctx_r0.year, "/", image_r1.name, ".", image_r1.suffix, "", i0.ɵɵsanitizeUrl);
} }
export class ImageCardsComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.closeResult = '';
    }
    open(image) {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.image = image;
        modalRef.componentInstance.year = this.year;
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }
}
ImageCardsComponent.ɵfac = function ImageCardsComponent_Factory(t) { return new (t || ImageCardsComponent)(i0.ɵɵdirectiveInject(i1.NgbModal)); };
ImageCardsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageCardsComponent, selectors: [["app-image-cards"]], inputs: { images: "images", year: "year" }, features: [i0.ɵɵProvidersFeature([NgbModalConfig, NgbModal])], decls: 2, vars: 1, consts: [[1, "images-wrapper", "justify-content-center"], ["class", "image-holder", 4, "ngFor", "ngForOf"], [1, "image-holder"], [3, "click"], [3, "src"]], template: function ImageCardsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ImageCardsComponent_div_1_Template, 3, 4, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.images);
    } }, directives: [i2.NgForOf], styles: [".images-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n }\n \n .image-holder[_ngcontent-%COMP%] {\n    margin: 5%; \n    height: 200px;\n }\n \n .image-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100%;\n    border-radius: 3%;\n  \n }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageCardsComponent, [{
        type: Component,
        args: [{ selector: 'app-image-cards', providers: [NgbModalConfig, NgbModal], template: "<div class=\"images-wrapper justify-content-center\">\n  <div class=\"image-holder\" *ngFor=\"let image of images\">\n    <a (click)=\"open(image)\">\n      <img src=\"assets/images/{{image.type}}/{{year}}/{{image.name}}.{{image.suffix}}\">\n    </a>\n      \n  </div>\n</div>\n\n\n  ", styles: [".images-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n }\n \n .image-holder {\n    margin: 5%; /*for white border around images*/\n    height: 200px;\n }\n \n .image-holder img {\n    height: 100%;\n    border-radius: 3%;\n  \n }"] }]
    }], function () { return [{ type: i1.NgbModal }]; }, { images: [{
            type: Input
        }], year: [{
            type: Input
        }] }); })();
//# sourceMappingURL=image-cards.component.js.map