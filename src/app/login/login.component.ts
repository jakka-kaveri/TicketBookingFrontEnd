import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketBookingServiceService } from '../ticket-booking-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router, private ticketBooking: TicketBookingServiceService) {}

  login() {
    if (this.username) {
      this.ticketBooking.login(this.username).subscribe(user => {
        localStorage.setItem('username', user.username);
        this.router.navigate(['/movie-selection']);
      });
    }
  }
}
