import { sum } from '../src/sum';

test('basic', async () => {
  expect(sum()).toBe(0);
});

test('basic again',  async () => {
  expect(sum(1, 2)).toBe(3);
});
