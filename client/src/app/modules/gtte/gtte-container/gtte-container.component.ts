import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import {
  GoogleTimelineData,
  ParsedGoogleTimelineData,
} from 'src/app/core/interfaces/google-timeline.interface';
import { ExcelService } from 'src/app/core/services/excel.service';
import { GoogleTimelineDataService } from 'src/app/core/services/google-timeline-data.service';

@Component({
  selector: 'app-gtte-container',
  templateUrl: './gtte-container.component.html',
  styleUrls: ['./gtte-container.component.scss'],
})
export class GtteContainerComponent {
  fileForm: FormGroup = this.fb.group({
    file: new FormControl(null, [Validators.required]),
  });

  dateRangeForm: FormGroup = this.fb.group({
    startDate: new FormControl(moment('01/02/2021', 'DD/MM/YYYY'), [
      Validators.required,
    ]),
    endDate: new FormControl(moment(), [Validators.required]),
  });

  busy: boolean = false;

  constructor(
    private fb: FormBuilder,
    private googleTimelineDataService: GoogleTimelineDataService,
    private excelService: ExcelService
  ) {}

  handleFileUploaded(uploadedFile: File) {
    this.fileForm.controls.file.setValue(uploadedFile);
    this.fileForm.updateValueAndValidity();
  }

  activeStepChange($event: StepperSelectionEvent) {
    if ($event.selectedIndex === 2) {
      this.createExcelFile();
    }
  }

  async createExcelFile() {
    this.busy = true;
    let googleTimelineData: GoogleTimelineData = await this.googleTimelineDataService.readFile(
      this.fileForm.controls.file.value
    );

    let parsedGoogleTimelineData: ParsedGoogleTimelineData = await this.googleTimelineDataService.parseGoogleTimelineData(
      googleTimelineData
    );
    googleTimelineData = null; // Save System memory

    const filteredGoogleTimelineData: ParsedGoogleTimelineData = await this.googleTimelineDataService.filterDataWithinTimeRange(
      parsedGoogleTimelineData,
      this.dateRangeForm.value.startDate,
      this.dateRangeForm.value.endDate
    );
    parsedGoogleTimelineData = null; // Save system memory

    this.excelService.createExcelFromGoogleTimelineData(
      filteredGoogleTimelineData
    );
    this.busy = false;
  }
}
