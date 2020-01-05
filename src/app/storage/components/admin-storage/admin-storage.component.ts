import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-admin-storage',
  templateUrl: './admin-storage.component.html',
  styleUrls: ['./admin-storage.component.css']
})
export class AdminStorageComponent implements OnInit {

  private modalRef;

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

  openProductModal() {
    this.modalRef = this.modalService.open(ProductModalComponent, { size: 'xl', centered: true });
    this.modalRef.componentInstance.productSelected = 'Ninguno';
    this.modalRef.result.then(result => this.onProductModalClosed(result), dismiss => {});
  }

  onProductModalClosed(result) {
    console.log(result);
  }

}
