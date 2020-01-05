import { Component, OnInit } from '@angular/core';

import { Finca } from '../../models/finca';

import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-finca-selection',
  templateUrl: './finca-selection.component.html',
  styleUrls: ['./finca-selection.component.css']
})
export class FincaSelectionComponent implements OnInit {

  private fincas: any = [];

  constructor(private service: StorageService) { 
    service.getFincas().subscribe(
      data => {
        this.fincas = data
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

}
