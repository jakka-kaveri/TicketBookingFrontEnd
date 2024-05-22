import { TestBed } from '@angular/core/testing';

import { TicketBookingServiceService } from './ticket-booking-service.service';

describe('TicketBookingServiceService', () => {
  let service: TicketBookingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketBookingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
