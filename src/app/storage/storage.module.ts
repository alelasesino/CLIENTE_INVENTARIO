import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootStorageComponent } from './components/root-storage/root-storage.component';
import { StorageRoutingModule } from './storage-routing.module';
import { FincaSelectionComponent } from './components/finca-selection/finca-selection.component';

import { StorageService } from './services/storage.service';
import { ParcelaSelectionComponent } from './components/parcela-selection/parcela-selection.component';
import { AdminStorageComponent } from './components/admin-storage/admin-storage.component';
import { GridStorageComponent } from './components/grid-storage/grid-storage.component';

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
    StorageRoutingModule
  ],
  providers: [StorageService]
})
export class StorageModule { }
