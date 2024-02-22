import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserStateManagerService } from '../../core/services/user-state-manager.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(private userStateManagerService: UserStateManagerService) {}
  submit(form: NgForm) {
    this.userStateManagerService.saveSignInUserInfo(form.value);
    form.reset();
  }
}
