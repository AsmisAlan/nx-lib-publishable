import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatThingComponent } from './feat-thing/feat-thing.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeatThingComponent],
  exports: [FeatThingComponent]
})
export class HubCoreFeatModule {}
