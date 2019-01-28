import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomeComponent } from './dome/dome.component';

@NgModule({
  declarations: [DomeComponent],
  imports: [
    CommonModule
  ],
  exports:[ DomeComponent  ]

})
export class TestModule { }
