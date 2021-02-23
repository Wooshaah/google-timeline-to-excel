import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'google-timeline-to-excel',
    loadChildren: () =>
      import('./modules/gtte/gtte.module').then((m) => m.GtteModule),
  },
  {
    path: '',
    redirectTo: 'google-timeline-to-excel',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
