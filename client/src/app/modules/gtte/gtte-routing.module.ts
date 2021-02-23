import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GtteContainerComponent } from './gtte-container/gtte-container.component';

const routes: Routes = [{ path: '', component: GtteContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GtteRoutingModule {}
