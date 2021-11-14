import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  getSessionStorage(key:string):string{
    const data = window.sessionStorage.getItem(key)
    return data!
  }

  setSessionStorage(key:string, value:any){
    const data = JSON.stringify(value)
    window.sessionStorage.setItem(key, data)
  }

  clearSessionStorage(){
    window.sessionStorage.clear()
  }
}
