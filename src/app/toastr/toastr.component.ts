import { Component, OnInit } from '@angular/core';
import {ToastrDenemeService} from "../services/toastrDeneme.service";

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(
    private toast:ToastrDenemeService
  ) {
  }

  ngOnInit(): void {
  }

  success(){
    this.toast?.toastSuccess("Success")
  }
  error(){
    this.toast.toastError("Error")
  }
  warning(){
    this.toast.toastWarning("warning")
  }

}
