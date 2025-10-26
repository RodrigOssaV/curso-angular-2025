import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingPageComponent } from "@shared/components/loading-page/loading-page.component";
import { SeparatorComponent } from "@shared/components/separator/separator.component";
import { FormatMovePipe } from '@shared/pipes/format-move.pipe';
import { MeasurementsPipe } from "@shared/pipes/measurements.pipe";
import { ZerosPipe } from "@shared/pipes/zeros.pipe";

@NgModule({
  declarations: [
    LoadingPageComponent,
    SeparatorComponent,
    FormatMovePipe,
    MeasurementsPipe,
    ZerosPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingPageComponent,
    SeparatorComponent,
    FormatMovePipe,
    MeasurementsPipe,
    ZerosPipe,
  ]
})
export class SharedModule { }
