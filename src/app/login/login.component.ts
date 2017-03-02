import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public snackBar: MdSnackBar) {}

  openSnackBar() {
    var dirtyFormID = 'login';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
    this.snackBar.open("PROXIMAMENTE", "", {
      duration: 1000,
    });
  }

  ngOnInit() {
  }

}
