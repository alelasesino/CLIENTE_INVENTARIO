import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  products: any = [];

  constructor(private service:StorageService, public activeModal: NgbActiveModal) { 
    service.getProducts().subscribe(
      data => {
        this.products = data;
        console.log(data);
        
      }, error => console.error(error)
    );
  }

  ngOnInit() {
  }

}
