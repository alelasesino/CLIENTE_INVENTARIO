import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { StorageService } from '../../services/storage.service';

import { ProductModalComponent } from '../product-modal/product-modal.component';
import { KeypadModalComponent } from '../keypad-modal/keypad-modal.component';


@Component({
  selector: 'app-admin-storage',
  templateUrl: './admin-storage.component.html',
  styleUrls: ['./admin-storage.component.css']
})
export class AdminStorageComponent implements OnInit {

  modalRef: any;
  params: any;
  finca: string;
  parcela: string;
  lote: string;

  constructor(public modalService: NgbModal, private service: StorageService, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.activedRoute.snapshot.params;

    this.service.getFinca(this.params.id_finca).subscribe(
      data => {
        this.finca = data[0].nombre;
      }, 
      error => console.error(error)
    );

    this.service.getParcela(this.params.id_parcela).subscribe(
      data => {
        this.parcela = data[0].numero;
      },
      error => console.error(error)
    );

    this.service.getLote(this.params.id_parcela).subscribe(
      data => {
        this.lote = data[0].lote;
      },
      error => console.error(error)
    );

  }

  openProductModal() {
    this.modalRef = this.modalService.open(ProductModalComponent, { size: 'xl', centered: true });
    this.modalRef.result.then(result => this.openKeypadModal(result), dismiss => {});
  }

  openKeypadModal(result) {
    this.modalRef = this.modalService.open(KeypadModalComponent, { size: 'xl', centered: true });
    this.modalRef.componentInstance.idProductSelected = result;
    this.modalRef.result.then(result => this.onKeypadModalClosed(result), dismiss => {});
  }

  onKeypadModalClosed(result) {

    const linea_almacen = {
      id_parcela: this.activedRoute.snapshot.params.id_parcela, 
      id_articulo: result.id_articulo, 
      cajas: result.cajas
    };

    this.service.addAlmacen(linea_almacen).subscribe(
      data => {
        console.log(data);
        //REFRESH GRID
      },
      error => console.error(error)
    );

  }

  onDeleteClick():void {
    
  }

}
