import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponentComponent } from './b-component/b-component.component';


@NgModule({
  imports: [CommonModule],
  declarations: [BComponentComponent],
  exports: [BComponentComponent]
})
export class BlibModule {}
