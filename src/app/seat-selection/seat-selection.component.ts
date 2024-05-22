import { Component } from '@angular/core';

interface Seat {
  number: number;
  selected: boolean;
}

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent {
  selectedMovie: string = '';
  seats: Seat[] = [];
  username: string = '';

  ngOnInit() {
    this.selectedMovie = localStorage.getItem('selectedMovie') || '';
    this.username = localStorage.getItem('username') || '';

    // Mock: fetch seats from backend
    this.seats = Array.from({ length: 10 }, (_, i) => ({ number: i + 1, selected: false }));

    // Check if user has already booked seats
    const bookedSeats = JSON.parse(localStorage.getItem(`${this.username}_bookedSeats_${this.selectedMovie}`) || '[]');
    bookedSeats.forEach((seatNumber: number) => {
      const seat = this.seats.find(s => s.number === seatNumber);
      if (seat) {
        seat.selected = true;
      }
    });
  }

  toggleSeat(seat: Seat) {
    seat.selected = !seat.selected;
  }

  confirmBooking() {
    const selectedSeats = this.seats.filter(seat => seat.selected).map(seat => seat.number);
    localStorage.setItem(`${this.username}_bookedSeats_${this.selectedMovie}`, JSON.stringify(selectedSeats));
    alert('Booking confirmed');
  }
}
