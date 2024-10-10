import { someFunc } from '../utils/simple.ts';

describe('Some test', () => {
  it('should return concatenated', () => {
    const result = someFunc('hello', 'world');
    expect(result).toBe('hello:world');
  });
});
