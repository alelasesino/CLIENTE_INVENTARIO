import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Parcela } from '../models/parcela';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  API_URI = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getFincas() {
    return this.http.get(`${this.API_URI}/fincas`);
  }

  getParcelas(id_finca: string) {
    return this.http.get(`${this.API_URI}/fincas/${id_finca}/parcelas`);
  }

}
