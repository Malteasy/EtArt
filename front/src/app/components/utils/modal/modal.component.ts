import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Image } from 'src/app/service/image';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult = '';
  @Input() year: string | undefined;
  @Input() image: Image | undefined;
  constructor(public activeModal: NgbActiveModal) {}

  
  ngOnInit(): void {
  }

  

}
