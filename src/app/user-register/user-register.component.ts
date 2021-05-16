import { Component, OnInit, NgZone} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import Userdata from 'src/app/models/userdata.model'
import { UserDataService } from "src/app/services/userdata.service"
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userdata: Userdata = new Userdata()
  form: FormGroup;
  submitted = false;
  constructor(
    public authService: AuthService,
    private userdataservice: UserDataService,
    public router: Router,
    public ngZone: NgZone
    ) { }

  ngOnInit(): void {
    /*this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        phone: ['', Validators.pattern("^[0-9][1-9]{9}")],
        nic: ['', Validators.pattern("^[A-Z][0-9]{9}"],
      }*/
  }

  /*get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }*/


  saveUserdata(): void {
    this.userdataservice.create(this.userdata).then(() => {
      if (this.form.invalid) {
        return;
      }
      console.log("Created item Successfully")
      this.submitted = true;
    })
  }

  NewUserdata(): void {
    this.submitted = false;
    this.userdata = new Userdata()
  }


}
