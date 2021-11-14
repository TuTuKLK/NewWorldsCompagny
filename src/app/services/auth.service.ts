import { urlApi } from './../shared/const/ulr-api.const';
import { ILogin } from './../shared/interfaces/user/login';
import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable } from 'rxjs';
import * as cryptojs from 'crypto-js';
import { IRegister } from '../shared/interfaces/user/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public LogedUser : boolean = false;

  constructor( private _http:HttpClient ) { }

  PostAuth(formulaireAuth : ILogin):Observable<ILogin>{
    const FormCryptage = {...formulaireAuth, Password : cryptojs.SHA256(formulaireAuth.Password).toString(cryptojs.enc.Base64)}
  console.log(FormCryptage);
  return this._http.post<ILogin>(`${urlApi}Fistule/check`, FormCryptage)
  }

  PostRegister(formulaireRegister : IRegister):any{
    const FormCryptage = {...formulaireRegister, Password : cryptojs.SHA256(formulaireRegister.Password).toString(cryptojs.enc.Base64)}
  console.log(FormCryptage);
  return this._http.post<IRegister>(`${urlApi}Fistule/register`, FormCryptage).subscribe(result => result)
  }

}
