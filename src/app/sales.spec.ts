import { Sales } from './sales';

describe('Sales', () => {
  it('should create an instance', () => {
    expect(new Sales('item', 'quantity', 'unitPrice')).toBeTruthy();
  });
});
