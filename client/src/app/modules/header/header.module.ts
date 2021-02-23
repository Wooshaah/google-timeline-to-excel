import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HeaderContainerComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderContainerComponent],
})
export class HeaderModule {}
