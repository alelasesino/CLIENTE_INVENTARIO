import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import keys from '../../keys'

@Injectable({
  providedIn: 'root'
})
export class PaletService {
  
  API_URI = keys.API_URI

  constructor(private http:HttpClient) { }

  getPalet(id_palet: string): Observable<Object> {
    return this.http.get(`${this.API_URI}/parcelas/${id_palet}/lote`);
  }

  getPalets(): Observable<Object> {
    return this.http.get(`${this.API_URI}/fincas`);
  }
/*
  getFinca(id_finca: string): Observable<Object> {
    return this.http.get(`${this.API_URI}/fincas/${id_finca}`);
  }

  getParcelas(id_finca: string): Observable<Object> {
    return this.http.get(`${this.API_URI}/fincas/${id_finca}/parcelas`);
  }

  getParcela(id_parcela: string): Observable<Object> {
    return this.http.get(`${this.API_URI}/parcelas/${id_parcela}`);
  }

  getParcelaAlmacen(id_parcela:string): Observable<Object> {
    return this.http.get(`${this.API_URI}/parcelas/${id_parcela}/almacen`);
  }

  getProducts() {
    return this.http.get(`${this.API_URI}/articulos`);
  }

  getProduct(id_articulo:string): Observable<Object> {
    return this.http.get(`${this.API_URI}/articulos/${id_articulo}`);
  }

  addAlmacen(linea_almacen): Observable<Object> {
    return this.http.put(`${this.API_URI}/almacen/add`, linea_almacen);
  }

  deleteAlmacen(id_linea): Observable<Object> {
    return this.http.request('delete', `${this.API_URI}/almacen/delete/${id_linea}`);
  }*/

}
