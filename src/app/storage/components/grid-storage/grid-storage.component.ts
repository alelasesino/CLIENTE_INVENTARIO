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
    {headerName: "ARTICULO", field: 'articulo.nombre', width: 120},
    {headerName: "HORA", field: 'fecha', width: 40, sortable: true},
    {headerName: "CAJAS", field: 'cajas', width: 40},
    {headerName: "KILOS", field: 'kilos', width: 40}
  ];

  rowData:any = [];
  gridApi;

  headerHeight = 45;
  rowHeight = 70;

  rowSelection = "single";
  rowSelected;

  constructor(private service:StorageService, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.updateDataGridFromApi();
  }

  updateDataGridFromApi() {
    const params = this.activedRoute.snapshot.params;
    this.service.getParcelaAlmacen(params.id_parcela).subscribe(
      data => {

        this.rowData = data;
        this.rowData.forEach(element => {  
          element.fecha = new Date(element.fecha).toISOString().substr(11, 5);
        });

      },
      error => console.log(error)
    );
    
  }

  onSelectionChanged() {
    this.rowSelected = this.gridApi.getSelectedRows()[0];
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

}
