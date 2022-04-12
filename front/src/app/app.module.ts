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
import { ImpressumComponent } from './components/impressum/impressum.component';
import { FooterComponent } from './components/utils/footer/footer.component';



@NgModule({
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
    ImageControllerComponent,
    ImpressumComponent,
    FooterComponent
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
})
export class AppModule { }
