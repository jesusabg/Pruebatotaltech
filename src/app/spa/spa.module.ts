import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SpaModule { }
