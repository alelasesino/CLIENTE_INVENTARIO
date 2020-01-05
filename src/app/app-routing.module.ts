import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootStorageComponent } from './storage/components/root-storage/root-storage.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '**', redirectTo: 'almacen', pathMatch: 'full'},
  {path: '', redirectTo: 'almacen', pathMatch: 'full'},
  {path: 'almacen', pathMatch: 'full', component: RootStorageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
