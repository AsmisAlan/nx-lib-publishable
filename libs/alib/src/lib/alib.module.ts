import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlibModule } from '@nx-publishable-lib/blib';
import { AComponentComponent } from './a-component/a-component.component'

@NgModule({
  imports: [CommonModule, BlibModule],
  declarations: [AComponentComponent],
  exports: [AComponentComponent]
})
export class AlibModule {}
