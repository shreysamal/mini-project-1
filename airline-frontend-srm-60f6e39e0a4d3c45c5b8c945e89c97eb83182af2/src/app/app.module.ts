// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, HttpClient, ReactiveFormsModule],
  providers: [HttpClientModule], // Add any providers if needed
  bootstrap: [AppComponent],
})
export class AppModule {}
