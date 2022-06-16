import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentChildComponent } from './content-child/content-child.component';
import { CpCardComponent } from './cp-card/cp-card.component';


@NgModule({
  declarations: [ContentChildComponent, CpCardComponent],
  imports: [
    CommonModule,
    ContentProjectionRoutingModule
  ]
})
export class ContentProjectionModule { }
