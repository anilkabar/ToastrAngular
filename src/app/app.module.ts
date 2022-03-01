import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrComponent } from './toastr/toastr.component';
import {ToastrDenemeService} from "./services/toastrDeneme.service";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ToastrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      closeButton:true,
      positionClass:'toast-bottom-right'
    })
  ],
  providers: [
    ToastrDenemeService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
