import { has } from '../has';


describe('has function', () => {
  it('当 target 是数组且 key 是具有匹配元素的对象时，应返回 true', () => {
    const target = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
    const key = { a: 1, b: 2 };
    expect(has(target, key)).toBe(true);
  });

  it('当 target 是一个数组并且 key 是一个没有匹配元素的对象时，应该返回 false', () => {
    const target = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
    const key = { a: 5, b: 6 };
    expect(has(target, key)).toBe(false);
  });

  it('当 target 是数组且 key 是数组中存在的基元值时，应返回 true', () => {
    const target = [1, 2, 3];
    const key = 2;
    expect(has(target, key)).toBe(true);
  });

  it('当 target 是一个数组并且 key 是数组中不存在的基元值时，应该返回 false', () => {
    const target = [1, 2, 3];
    const key = 4;
    expect(has(target, key)).toBe(false);
  });

  it('当 target 是一个对象并且 key 匹配所有指定的属性时，应该返回 true', () => {
    const target = { a: 1, b: 2 };
    const key = { a: 1, b: 2 };
    expect(has(target, key)).toBe(true);
  });

  it('当 target 是对象且 key 不匹配所有指定属性时，应返回 false', () => {
    const target = { a: 1, b: 2 };
    const key = { a: 1, b: 3 };
    expect(has(target, key)).toBe(false);
  });

  it('当 target 既不是数组也不是对象时，应返回 false', () => {
    const target = 'string';
    const key = { a: 1 };
    expect(has(target, key)).toBe(false);
  });
});
