
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { UserRp } from 'src/app/api-clients/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _$userCurrent: BehaviorSubject<UserRp> = new BehaviorSubject(new UserRp());
  public readonly $userCurrent: Observable<UserRp> = this._$userCurrent.asObservable();

  constructor(private _router: Router) { 
   
  }

  public setJWT(jwt: string): void{
    localStorage.setItem('jwt', jwt);
  }

  public logout(): void{
    localStorage.setItem('jwt', '');
    this._$userCurrent.next(new UserRp());
  }

  public setUserCurrent(user: UserRp): void{
    this._$userCurrent.next(user);
  }

  private _getDecodedJwt(jwt: string): {username: string, displayName: string, exp: number} | null {
    try {
      return jwt_decode(jwt);
    } catch (Error) {
      return null;
    }
  }

  getTokenRemainingTime(): boolean {
    let jwt = localStorage.getItem('jwt');
    if(jwt != null && jwt != undefined) {
      let exp = this._getDecodedJwt(jwt)?.exp;
      if(exp != null){
        let expires = new Date(exp*1000);
        return (expires.getTime() - Date.now()) > 0;
      }
    }
    return false;
  }

  getJWT(): string{
    let jwt = localStorage.getItem('jwt');
    return jwt  == null ? '' : jwt ;
  }
}
