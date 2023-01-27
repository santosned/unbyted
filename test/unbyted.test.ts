import { describe, expect, test } from '@jest/globals'
import unbyted from '../package/index'

describe('new Unbyted instance', () => {
  test('exposes the public API', () => {
    const methods = unbyted()

    expect(methods).toHaveProperty('toBinaryString')
    expect(methods).toHaveProperty('toDecimalString')
  })

  test('turns bytes to binary string', () => {
    const methods = unbyted()

    expect(methods.toBinaryString(0)).toBe('0.00 KiB')
    expect(methods.toBinaryString(100)).toBe('0.10 KiB')
    expect(methods.toBinaryString(-100)).toBe('0.00 KiB')
  })

  test('turns bytes to decimal string', () => {
    const methods = unbyted()

    expect(methods.toDecimalString(0)).toBe('0.00 KB')
    expect(methods.toDecimalString(100)).toBe('0.10 KB')
  })

  test('trowns when given invalid bytes', () => {
    const methods = unbyted()

    // @ts-expect-error: tests error handling
    expect(() => methods.toBinaryString({})).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => methods.toBinaryString(null)).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => methods.toBinaryString('100')).toThrow()

    // @ts-expect-error: tests error handling
    expect(() => methods.toDecimalString({})).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => methods.toDecimalString(null)).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => methods.toDecimalString('100')).toThrow()
  })

  test('trim measurement unit value', () => {
    const methods = unbyted({ trim: true })

    expect(methods.toBinaryString(100)).toBe('0.1 KiB')
    expect(methods.toDecimalString(100)).toBe('0.1 KB')
  })

  test('remove measurement unit', () => {
    const methods = unbyted({ unit: false })

    expect(methods.toBinaryString(100)).toBe('0.10')
    expect(methods.toDecimalString(100)).toBe('0.10')
  })

  test('display bytes (B) measurement unit', () => {
    const methods = unbyted({ includeBytes: true })

    expect(methods.toBinaryString(100)).toBe('100.00 B')
    expect(methods.toDecimalString(100)).toBe('100.00 B')
  })

  test('custom decimal places / floating points', () => {
    const methods = unbyted({ decimals: 1 })

    expect(methods.toBinaryString(100)).toBe('0.1 KiB')
    expect(methods.toDecimalString(100)).toBe('0.1 KB')
  })

  test('custom default binary units values', () => {
    const methods = unbyted({ defaultBinaryUnitValue: 1000 })

    expect(methods.toBinaryString(10000)).toBe('10.00 KiB')
  })

  test('custom default decimal units values', () => {
    const methods = unbyted({ defaultDecimalUnitValue: 1024 })

    expect(methods.toDecimalString(10000)).toBe('9.77 KB')
  })
})

describe('Custom measurement units symbols', () => {
  test('valid custom binary units symbols', () => {
    const methods = unbyted({
      binaryUnits: [
        'Bytes',
        'Kibibytes',
        'Mebibytes',
        'Gigibytes',
        'Tebibytes',
        'Pebibytes',
        'Exbibytes',
      ],
    })

    expect(methods.toBinaryString(100)).toBe('0.10 Kibibytes')
  })

  test('valid custom decimal units symbols', () => {
    const methods = unbyted({
      decimalUnits: [
        'Bytes',
        'Kilobytes',
        'Megabytes',
        'Gigabytes',
        'Terabytes',
        'Petabytes',
        'Exabytes',
      ],
    })

    expect(methods.toDecimalString(100)).toBe('0.10 Kilobytes')
  })

  test('throws if 7 custom measurement units symbols are not provided', () => {
    expect(() =>
      unbyted({
        // @ts-expect-error: tests error handling
        binaryUnits: ['Bytes', 'Kibibytes', 'Mebibytes'],
      })
    ).toThrow()

    expect(() =>
      unbyted({
        // @ts-expect-error: tests error handling
        decimalUnits: ['Bytes', 'Kilobytes', 'Megabytes'],
      })
    ).toThrow()
  })
})
