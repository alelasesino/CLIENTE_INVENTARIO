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
    {headerName: "ID", field: 'id', hide: true},
    {headerName: "ARTICULO", field: 'articulo.nombre', width: 100},
    {headerName: "HORA", field: 'fecha', width: 50},
    {headerName: "CAJAS", field: 'cajas', width: 50},
    {headerName: "KILOS", field: 'kilos', width: 50}
  ];

  rowData:any = [];
  gridApi;

  headerHeight = 45;
  rowHeight = 70;

  rowSelection = "single";
  selectedRows;

  constructor(private service:StorageService, private activedRoute: ActivatedRoute) { 
    
    const params = activedRoute.snapshot.params;
    
    service.getParcelaAlmacen(params.id_parcela).subscribe(
      data => {

        this.rowData = data;
        this.rowData.forEach(element => {
          
          const fecha = new Date(element.fecha);
          element.fecha = fecha.getHours() + ":" + fecha.getMinutes();
          
        });

      },
      error => console.log(error)
    );

   }

  ngOnInit() {
  }

  onSelectionChanged() {
    this.selectedRows = this.gridApi.getSelectedRows()[0];
    console.log(this.selectedRows);
    
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

}
