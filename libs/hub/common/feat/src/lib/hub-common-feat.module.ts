import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingComponent } from './thing/thing.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ThingComponent],
  exports: [ThingComponent]
})
export class HubCommonFeatModule {}
