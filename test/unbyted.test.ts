import Unbyted from '../package/index';

const yotta = 2e25;
const zetta = 2e22;
const exa = 2e20;
const peta = 2e16;
const tera = 2e12;
const giga = 2e10;
const mega = 2e8;
const kilo = 2e4;

describe('Unbyted - Initialization', () => {
  it('instantiate & expose public API', () => {
    const methods = new Unbyted();

    expect(typeof methods.toBinary).toBe('function');
    expect(typeof methods.toDecimal).toBe('function');
  });

  it('expose static methods', () => {
    expect(Unbyted).toHaveProperty('toBinary');
    expect(Unbyted).toHaveProperty('toDecimal');
    expect(typeof Unbyted.toBinary).toBe('function');
    expect(typeof Unbyted.toDecimal).toBe('function');
  });
});

describe('Unbyted - Common Bytes Operations (CBO)', () => {
  it('converts to binary', () => {
    expect(Unbyted.toBinary(kilo)).toBe('19.53 KiB');
    expect(Unbyted.toBinary(mega)).toBe('190.73 MiB');
    expect(Unbyted.toBinary(giga)).toBe('18.63 GiB');
    expect(Unbyted.toBinary(tera)).toBe('1.82 TiB');
    expect(Unbyted.toBinary(peta)).toBe('17.76 PiB');
    expect(Unbyted.toBinary(exa)).toBe('173.47 EiB');
    expect(Unbyted.toBinary(zetta)).toBe('16.94 ZiB');
    expect(Unbyted.toBinary(yotta)).toBe('16.54 YiB');
  });

  it('converts to decimal', () => {
    expect(Unbyted.toDecimal(kilo)).toBe('20.00 KB');
    expect(Unbyted.toDecimal(mega)).toBe('200.00 MB');
    expect(Unbyted.toDecimal(giga)).toBe('20.00 GB');
    expect(Unbyted.toDecimal(tera)).toBe('2.00 TB');
    expect(Unbyted.toDecimal(peta)).toBe('20.00 PB');
    expect(Unbyted.toDecimal(exa)).toBe('200.00 EB');
    expect(Unbyted.toDecimal(zetta)).toBe('20.00 ZB');
    expect(Unbyted.toDecimal(yotta)).toBe('20.00 YB');
  });
});

describe('Unbyted - Customize Conversion Formats (CCF)', () => {
  it('digits', () => {
    expect(new Unbyted({ digits: 1 }).toBinary(1024)).toBe('1.0 KiB');
    expect(new Unbyted({ digits: 3 }).toBinary(1024)).toBe('1.000 KiB');
    expect(new Unbyted({ digits: 1 }).toDecimal(1000)).toBe('1.0 KB');
    expect(new Unbyted({ digits: 3 }).toDecimal(1000)).toBe('1.000 KB');
  });

  it('trim', () => {
    expect(new Unbyted({ trim: true }).toBinary(1024)).toBe('1 KiB');
    expect(new Unbyted({ trim: true }).toDecimal(1000)).toBe('1 KB');
  });

  it('space', () => {
    expect(new Unbyted({ space: false }).toBinary(1024)).toBe('1.00KiB');
    expect(new Unbyted({ space: false }).toDecimal(1000)).toBe('1.00KB');
  });
});

describe('Unbyted - Handles Code Exceptions (HCE)', () => {
  it('handles empty bytes', () => {
    expect(Unbyted.toBinary()).toBe('0.00 B');
    expect(Unbyted.toDecimal()).toBe('0.00 B');
    expect(new Unbyted().toBinary()).toBe('0.00 B');
    expect(new Unbyted().toDecimal()).toBe('0.00 B');
  });

  it('trowns when caught invalid bytes', () => {
    const methods = new Unbyted();

    // @ts-expect-error: tests error handling
    expect(() => methods.toBinary({})).toThrow();
    // @ts-expect-error: tests error handling
    expect(() => methods.toBinary(null)).toThrow();
    // @ts-expect-error: tests error handling
    expect(() => methods.toBinary('100')).toThrow();
    expect(() => methods.toBinary(Infinity)).toThrow();

    // @ts-expect-error: tests error handling
    expect(() => methods.toDecimal({})).toThrow();
    // @ts-expect-error: tests error handling
    expect(() => methods.toDecimal(null)).toThrow();
    // @ts-expect-error: tests error handling
    expect(() => methods.toDecimal('100')).toThrow();
    expect(() => methods.toDecimal(Infinity)).toThrow();
  });
});
