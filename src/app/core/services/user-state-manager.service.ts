import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserStateManagerService {
  private userData: any;
  userSignInEvent: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  saveSignInUserInfo(userData: any) {
    this.userData = userData;
    this.userSignInEvent.emit(true);
  }
  removeSignInUserInfo() {
    this.userData = undefined;
    this.userSignInEvent.emit(false);
  }
  getSignInUserInFo() {
    return this.userData;
  }
  checkUser(): boolean {
    return this.userData != undefined;
  }
}
