import { it, expect, describe } from 'vitest'
import { formateMoney } from './money'

describe('formateMoney', () => {
  it('formats 3980 cents as 39.80', () => {
    expect(formateMoney(3980)).toBe('39.80');
  });
});
