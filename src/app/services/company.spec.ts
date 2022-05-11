import { company } from '../Model/company';

describe('Company', () => {
  it('should create an instance', () => {
    expect(new company()).toBeTruthy();
  });
});
