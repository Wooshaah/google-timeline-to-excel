import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GtteRoutingModule } from './gtte-routing.module';
import { GtteContainerComponent } from './gtte-container/gtte-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GtteContainerComponent],
  imports: [CommonModule, GtteRoutingModule, SharedModule],
})
export class GtteModule {}
