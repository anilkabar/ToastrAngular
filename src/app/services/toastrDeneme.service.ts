import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@Injectable({
  providedIn: 'root'
})
export class ToastrDenemeService {

  constructor(
    private toastr:ToastrService
  ) { }

   toastSuccess(messages:any){
    this.toastr.success(messages)
  }
  toastError(messages:any){
    this.toastr.error(messages)
  }

  toastWarning(messages:any){
    this.toastr.warning(messages)
  }
}
