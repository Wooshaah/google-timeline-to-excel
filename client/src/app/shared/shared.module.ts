import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BodyComponent } from './components/body/body.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { TitleComponent } from './components/title/title.component';
import { SubheadingComponent } from './components/subheading/subheading.component';
import { PageComponent } from './components/page/page.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { NgxFileHelpersModule } from 'ngx-file-helpers';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    BodyComponent,
    HeadlineComponent,
    TitleComponent,
    SubheadingComponent,
    PageComponent,
    PageHeaderComponent,
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatProgressSpinnerModule,
    RouterModule,
    NgxFileHelpersModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [
    TranslateModule,
    BodyComponent,
    HeadlineComponent,
    TitleComponent,
    SubheadingComponent,
    PageComponent,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatProgressSpinnerModule,
    RouterModule,
    PageHeaderComponent,
    FileUploadComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
