import { describe, it, expect } from 'vitest';
import { calculateAge } from '../utils';

describe('calculateAge', () => {
  it('should correctly calculate age based on birth year', () => {
    const birthYear = 2007;
    const expectedAge = new Date().getFullYear() - birthYear;
    expect(calculateAge(birthYear)).toBe(expectedAge);
  });
});
