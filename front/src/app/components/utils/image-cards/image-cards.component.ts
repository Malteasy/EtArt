import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import {Image} from 'src/app/service/image'
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-image-cards',
  templateUrl: './image-cards.component.html',
  styleUrls: ['./image-cards.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ImageCardsComponent implements OnInit {
  public closeResult = '';
  public innerWidth: any;
  @Input()
  public images: Image[] | undefined;

  @Input()
  year: string | undefined;

  constructor(private modalService: NgbModal) {}

  open(image: Image) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.image = image;
    modalRef.componentInstance.year = this.year;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  
  }

}

