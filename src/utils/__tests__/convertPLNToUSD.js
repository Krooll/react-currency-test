import { convertPLNToUSD } from "../convertPLNToUSD";


describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('asddc')).toBeNaN();
    expect(convertPLNToUSD('-233')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD('')).toBeNaN(); 
    expect(convertPLNToUSD()).toBeNaN(); 
  });
  it('should return $0,00 when input is lower than zero', () => {
    expect(convertPLNToUSD(-24)).toBe('$0.00');
    expect(convertPLNToUSD(-123)).toBe('$0.00');
    expect(convertPLNToUSD(-455)).toBe('$0.00');
  });
  it('should return Error when its an object, array, null or function', () => {
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
  });
});