import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { PaintingComponent } from './components/painting/painting.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ImageCardsComponent } from './components/utils/image-cards/image-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { EmbroideryComponent } from './components/embroidery/embroidery.component';
import { ImageCardComponent } from './components/utils/image-card/image-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/utils/modal/modal.component';
import { AboutComponent } from './components/about/about.component';
import { ImageControllerComponent } from './components/utils/image-controller/image-controller.component';
import * as i0 from "@angular/core";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            AppRoutingModule,
            NgbModule,
            HttpClientModule,
            BrowserAnimationsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    HomeComponent,
                    PaintingComponent,
                    PhotographyComponent,
                    ImageCardsComponent,
                    EmbroideryComponent,
                    ImageCardComponent,
                    ModalComponent,
                    AboutComponent,
                    ImageControllerComponent
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    NgbModule,
                    HttpClientModule,
                    BrowserAnimationsModule
                ],
                providers: [],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        HomeComponent,
        PaintingComponent,
        PhotographyComponent,
        ImageCardsComponent,
        EmbroideryComponent,
        ImageCardComponent,
        ModalComponent,
        AboutComponent,
        ImageControllerComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        BrowserAnimationsModule] }); })();
//# sourceMappingURL=app.module.js.map