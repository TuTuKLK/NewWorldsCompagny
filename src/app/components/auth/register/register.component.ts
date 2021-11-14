import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private _fb : FormBuilder, private _authServices : AuthService) { }
  public registerForm : FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      Mail : '',
      Password : '',
      Pseudo : '',
    })
    
  }

  submitAuth(){
    this._authServices.PostRegister(this.registerForm.value)
  }

}
