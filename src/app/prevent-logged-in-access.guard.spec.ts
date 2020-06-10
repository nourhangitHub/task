import { TestBed, async, inject } from '@angular/core/testing';

import { PreventLoggedInAccessGuard } from './prevent-logged-in-access.guard';

describe('PreventLoggedInAccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventLoggedInAccessGuard]
    });
  });

  it('should ...', inject([PreventLoggedInAccessGuard], (guard: PreventLoggedInAccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});
