import { TestBed } from '@angular/core/testing';

import { ApiPracticienService } from './api-practicien.service';

describe('ApiPracticienService', () => {
  let service: ApiPracticienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPracticienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
