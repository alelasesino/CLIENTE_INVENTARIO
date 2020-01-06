import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-keypad-modal',
  templateUrl: './keypad-modal.component.html',
  styleUrls: ['./keypad-modal.component.css']
})
export class KeypadModalComponent implements OnInit {

  productSelected: string;
  displayValue: string = "0";
  firtClick: boolean = true;

  keypad: number[][] = [
    [7,8,9],
    [4,5,6],
    [1,2,3]
  ];

  constructor(public activeModal: NgbActiveModal, private service:StorageService) { }

  ngOnInit() {
    this.service.getProduct(this.productSelected).subscribe(
      (data:any) => {
        this.productSelected = data[0].nombre;
      },
      error => console.error(error)
    );
  }

  onNumberClick(number: string) {

    if(this.firtClick) {
      this.displayValue = ""
      this.firtClick = false;
    }

    this.displayValue = this.displayValue.concat(number);
      
  } 

  onDeleteClick() {
    this.displayValue = "0";
    this.firtClick = true;
  }

}
