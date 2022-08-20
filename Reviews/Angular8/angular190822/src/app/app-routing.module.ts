import { NgIfNgforComponent } from './ng-if-ngfor/ng-if-ngfor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes = [
  { path: 'first-component', component: DataBindingComponent },
  { path: 'ngifngfor', component: NgIfNgforComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
