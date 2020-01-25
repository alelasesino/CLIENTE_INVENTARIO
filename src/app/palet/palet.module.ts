import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaletRoutingModule } from './palet-routing.module';
import { PaletSelectionComponent } from './components/palet-selection/palet-selection.component';


@NgModule({
  declarations: [PaletSelectionComponent],
  imports: [
    CommonModule,
    PaletRoutingModule
  ]
})
export class PaletModule { }
