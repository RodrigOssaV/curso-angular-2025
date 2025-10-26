import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from "@shared/components/loading-page/loading-page.component";
import { SeparatorComponent } from "@shared/components/separator/separator.component";

@NgModule({
  declarations: [
    LoadingPageComponent,
    SeparatorComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingPageComponent,
    SeparatorComponent,
  ]
})
export class SharedModule { }
