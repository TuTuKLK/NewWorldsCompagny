import { SessionStorageService } from './../../services/session-storage.service';
import { ILogin } from './../../shared/interfaces/user/login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public registerPass = 'register';
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _sessionStorage: SessionStorageService
  ) {}

  public authForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.authForm = this._fb.group({
      Mail: '',
      Password: '',
    });
  }
  submitAuth() {
    this._authService.PostAuth(this.authForm.value).subscribe((r: ILogin) => {
      this._sessionStorage.setSessionStorage('UserID', r.UserID);
      this._authService.LogedUser =
        !!this._sessionStorage.getSessionStorage('UserID');
      this._router.navigate(['']);
    });
  }
}
