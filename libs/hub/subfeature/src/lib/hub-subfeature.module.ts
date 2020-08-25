import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { HubCommonFeatModule } from '@nx-publishable-lib/hub/common/api'

@NgModule({
  imports: [CommonModule, HubCommonFeatModule],
  declarations: [ContainerComponent],
})
export class HubSubfeatureModule {}
