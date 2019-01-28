import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MessagesComponent } from '../app/messages/messages.component';
import { DynamicComponent} from '../app/dynamic-component/dynamic/dynamic.component';
import { HeroBiosComponent } from '../app/dependency/hero-bios/hero-bios.component';
import { DynamicBannerComponent } from '../app/dynamic-component/dynamic-banner/dynamic-banner.component';
import { HeroBioComponent } from '../app/dependency/hero-bio/hero-bio.component'
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestModule } from '../app/test/test.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,FormsModule,ReactiveFormsModule,TestModule
      ],
      declarations: [
        AppComponent,MessagesComponent,DynamicComponent,HeroBiosComponent,DynamicBannerComponent,HeroBioComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Myapp'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Myapp');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to Myapp!');
  // });
});
