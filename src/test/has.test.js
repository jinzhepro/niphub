import { has } from '../has';


describe('has function', () => {
  it('should return true when target is an array and key is an object with a matching element', () => {
    const target = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
    const key = { a: 1, b: 2 };
    expect(has(target, key)).toBe(true);
  });

  it('should return false when target is an array and key is an object with no matching element', () => {
    const target = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
    const key = { a: 5, b: 6 };
    expect(has(target, key)).toBe(false);
  });

  it('should return true when target is an array and key is a primitive value present in the array', () => {
    const target = [1, 2, 3];
    const key = 2;
    expect(has(target, key)).toBe(true);
  });

  it('should return false when target is an array and key is a primitive value not present in the array', () => {
    const target = [1, 2, 3];
    const key = 4;
    expect(has(target, key)).toBe(false);
  });

  it('should return true when target is an object and key matches all specified properties', () => {
    const target = { a: 1, b: 2 };
    const key = { a: 1, b: 2 };
    expect(has(target, key)).toBe(true);
  });

  it('should return false when target is an object and key does not match all specified properties', () => {
    const target = { a: 1, b: 2 };
    const key = { a: 1, b: 3 };
    expect(has(target, key)).toBe(false);
  });

  it('should return false when target is neither an array nor an object', () => {
    const target = 'string';
    const key = { a: 1 };
    expect(has(target, key)).toBe(false);
  });
});
