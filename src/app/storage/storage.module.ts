import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootStorageComponent } from './components/root-storage/root-storage.component';
import { FincaSelectionComponent } from './components/finca-selection/finca-selection.component';
import { ParcelaSelectionComponent } from './components/parcela-selection/parcela-selection.component';
import { AdminStorageComponent } from './components/admin-storage/admin-storage.component';
import { GridStorageComponent } from './components/grid-storage/grid-storage.component';

import { StorageRoutingModule } from './storage-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StorageService } from './services/storage.service';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { KeypadModalComponent } from './components/keypad-modal/keypad-modal.component';

@NgModule({
  declarations: [
    RootStorageComponent,
    FincaSelectionComponent,
    ParcelaSelectionComponent,
    AdminStorageComponent,
    GridStorageComponent,
    ProductModalComponent,
    KeypadModalComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    AgGridModule.withComponents([]),
    NgbModule
  ],
  entryComponents:[ProductModalComponent, KeypadModalComponent],
  providers: [StorageService]
})
export class StorageModule { }
