import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { HeroBiosComponent } from './hero-bios/hero-bios.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroBioComponent, HeroBiosComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[ HeroBiosComponent ]
})
export class DependencyModule { }
