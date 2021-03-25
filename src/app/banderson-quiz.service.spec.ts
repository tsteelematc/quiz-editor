import { TestBed } from '@angular/core/testing';

import { BandersonQuizService } from './banderson-quiz.service';

describe('BandersonQuizService', () => {
  let service: BandersonQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandersonQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
