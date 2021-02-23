import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { TitleComponent } from './components/title/title.component';
import { SubheadingComponent } from './components/subheading/subheading.component';

@NgModule({
  declarations: [BodyComponent, HeadlineComponent, TitleComponent, SubheadingComponent],
  imports: [CommonModule],
  exports: [BodyComponent, HeadlineComponent, TitleComponent, SubheadingComponent],
})
export class SharedModule {}
