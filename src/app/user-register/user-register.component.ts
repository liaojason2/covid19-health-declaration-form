import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Userdata from 'src/app/models/userdata.model'
import { UserDataService } from "src/app/services/userdata.service"
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userdata: Userdata = new Userdata()
  form: FormGroup;
  submitted = false;
  constructor(private userdataservice: UserDataService) { }

  ngOnInit(): void {
  }

  saveUserdata(): void {
    this.userdataservice.create(this.userdata).then(() => {
      console.log("Created item Successfully")
      this.submitted = true;
    })
  }

  NewUserdata(): void {
    this.submitted = false;
    this.userdata = new Userdata()
  }


}
