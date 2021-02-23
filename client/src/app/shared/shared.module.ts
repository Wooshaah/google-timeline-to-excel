import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { TitleComponent } from './components/title/title.component';
import { SubheadingComponent } from './components/subheading/subheading.component';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [BodyComponent, HeadlineComponent, TitleComponent, SubheadingComponent, PageComponent],
  imports: [CommonModule],
  exports: [BodyComponent, HeadlineComponent, TitleComponent, SubheadingComponent, PageComponent],
})
export class SharedModule {}
