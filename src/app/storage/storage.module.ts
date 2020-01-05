import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootStorageComponent } from './components/root-storage/root-storage.component';
import { FincaSelectionComponent } from './components/finca-selection/finca-selection.component';
import { ParcelaSelectionComponent } from './components/parcela-selection/parcela-selection.component';
import { AdminStorageComponent } from './components/admin-storage/admin-storage.component';
import { GridStorageComponent } from './components/grid-storage/grid-storage.component';

import { StorageRoutingModule } from './storage-routing.module';
import { AgGridModule } from 'ag-grid-angular';

import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    RootStorageComponent,
    FincaSelectionComponent,
    ParcelaSelectionComponent,
    AdminStorageComponent,
    GridStorageComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [StorageService]
})
export class StorageModule { }
