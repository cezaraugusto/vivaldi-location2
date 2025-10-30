import { expect, test, describe } from 'vitest';
import vivaldiLocation from '../src/index';

describe('vivaldi-location2 module', () => {
  test('returns string or null', () => {
    const res = vivaldiLocation();
    expect(typeof res === 'string' || res === null).toBe(true);
  });
});
