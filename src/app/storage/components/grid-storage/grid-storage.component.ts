import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid-storage',
  templateUrl: './grid-storage.component.html',
  styleUrls: ['./grid-storage.component.css']
})
export class GridStorageComponent implements OnInit {

  columnDefs = [
    {headerName: "ARTICULO", field: 'articulo.nombre'},
    {headerName: "HORA", field: 'fecha'},
    {headerName: "STOCK", field: 'stock'},
    {headerName: "KILOS", field: 'kilos'}
  ];

  rowData:any = [];

  headerHeight = 45;
  rowHeight = 70;

  /*id_finca:string;
  id_parcela:string;*/

  constructor(private service:StorageService, private activedRoute: ActivatedRoute) { 
    
    const params = activedRoute.snapshot.params;

    /*this.id_finca = params.id_finca;
    this.id_parcela = params.id_parcela;*/
    
    service.getParcelaAlmacen(params.id_parcela).subscribe(
      data => {

        this.rowData = data;
        this.rowData.forEach(element => {
          
          const fecha = new Date(element.fecha);
          element.fecha = fecha.getUTCHours() + ":" + fecha.getUTCMinutes();

        });

      },
      error => console.log(error)
    );

   }

  ngOnInit() {
  }

  onGridReady(params){
    params.api.sizeColumnsToFit();
  }

}
