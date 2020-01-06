import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModalComponent } from '../product-modal/product-modal.component';
import { KeypadModalComponent } from '../keypad-modal/keypad-modal.component';

@Component({
  selector: 'app-admin-storage',
  templateUrl: './admin-storage.component.html',
  styleUrls: ['./admin-storage.component.css']
})
export class AdminStorageComponent implements OnInit {

  private modalRef;
  private productSelected;

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

  openProductModal() {
    this.modalRef = this.modalService.open(ProductModalComponent, { size: 'xl', centered: true });
    this.modalRef.result.then(result => this.openKeypadModal(result), dismiss => {});
  }

  openKeypadModal(result) {
    this.modalRef = this.modalService.open(KeypadModalComponent, { size: 'xl', centered: true });
    this.modalRef.componentInstance.productSelected = result;
    this.modalRef.result.then(result => this.onKeypadModalClosed(result), dismiss => {});
  }

  onKeypadModalClosed(result) {
    console.log('Numero de cajas:', result);
  }

}
