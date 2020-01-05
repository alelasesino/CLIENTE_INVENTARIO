import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FincaSelectionComponent } from './components/finca-selection/finca-selection.component';
import { ParcelaSelectionComponent } from './components/parcela-selection/parcela-selection.component';
import { AdminStorageComponent } from './components/admin-storage/admin-storage.component';

const routes: Routes = [
  {path: 'fincas', pathMatch: 'full', component: FincaSelectionComponent},
  {path: 'fincas/:id_finca/parcelas', pathMatch: 'full', component: ParcelaSelectionComponent},
  {path: 'fincas/:id_finca/parcelas/:id_parcela/almacen', pathMatch: 'full', component: AdminStorageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
