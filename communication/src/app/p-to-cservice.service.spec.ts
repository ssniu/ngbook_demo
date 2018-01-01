import { TestBed, inject } from '@angular/core/testing';

import { PToCserviceService } from './p-to-cservice.service';

describe('PToCserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PToCserviceService]
    });
  });

  it('should be created', inject([PToCserviceService], (service: PToCserviceService) => {
    expect(service).toBeTruthy();
  }));
});
