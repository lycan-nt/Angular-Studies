import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './error-404/error-404.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/nav-bar/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', 
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: "**",
        component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
