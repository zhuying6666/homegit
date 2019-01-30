import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomeComponent } from './dome.component';

describe('DomeComponent', () => {
  let component: DomeComponent;
  let fixture: ComponentFixture<DomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('#clicked should toggle #ison',() =>{
    expect(component.ison).toBe(false);
    component.clicked();
    expect(component.ison).toBe(true);
    component.clicked();
    expect(component.ison).toBe(false);
  });

  it('#clicked should change msg',() =>{
    expect(component.msg).toMatch(/false/i);
    component.clicked();
    expect(component.msg).toMatch(/true/i);
    component.clicked();
    expect(component.msg).toMatch(/false/i);
  });

});
