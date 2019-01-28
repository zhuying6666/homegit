import { Component, OnInit } from '@angular/core';
import { DependencyServiceService } from '../dependency-service.service'
@Component({
  selector: 'app-hero-bios',
  providers: [DependencyServiceService],

  templateUrl: './hero-bios.component.html',
  styleUrls: ['./hero-bios.component.css']
})
export class HeroBiosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
