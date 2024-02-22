import { Component } from '@angular/core';
import { UserStateManagerService } from '../../core/services/user-state-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  show: boolean = false;
  constructor(private userStateManager: UserStateManagerService) {}
  ngOnInit(): void {
    this.userStateManager.userSignInEvent.subscribe((response) => {
      this.show = response;
    });
  }
  signOut() {
    this.userStateManager.removeSignInUserInfo();
  }
}
