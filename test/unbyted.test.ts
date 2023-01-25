import { describe, expect, test } from '@jest/globals'
import Unbyted from '../package/index'

describe('new Unbyted instance', () => {
  test('exposes the public API', () => {
    const unbyted = new Unbyted()

    expect(unbyted).toHaveProperty('toBinaryString')
    expect(unbyted).toHaveProperty('toDecimalString')
  })

  test('turns bytes to binary string', () => {
    const unbyted = new Unbyted()

    expect(unbyted.toBinaryString(0)).toBe('0.00 KiB')
    expect(unbyted.toBinaryString(100)).toBe('0.10 KiB')
    expect(unbyted.toBinaryString(-100)).toBe('0.00 KiB')
  })

  test('turns bytes to decimal string', () => {
    const unbyted = new Unbyted()

    expect(unbyted.toDecimalString(0)).toBe('0.00 KB')
    expect(unbyted.toDecimalString(100)).toBe('0.10 KB')
  })

  test('trowns when given invalid bytes', () => {
    const unbyted = new Unbyted()

    // @ts-expect-error: tests error handling
    expect(() => unbyted.toBinaryString({})).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => unbyted.toBinaryString(null)).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => unbyted.toBinaryString('100')).toThrow()

    // @ts-expect-error: tests error handling
    expect(() => unbyted.toDecimalString({})).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => unbyted.toDecimalString(null)).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => unbyted.toDecimalString('100')).toThrow()
  })

  test('trim measurement unit value', () => {
    const unbyted = new Unbyted({ trim: true })

    expect(unbyted.toBinaryString(100)).toBe('0.1 KiB')
    expect(unbyted.toDecimalString(100)).toBe('0.1 KB')
  })

  test('remove measurement unit', () => {
    const unbyted = new Unbyted({ unit: false })

    expect(unbyted.toBinaryString(100)).toBe('0.10')
    expect(unbyted.toDecimalString(100)).toBe('0.10')
  })

  test('display bytes in measurement unit', () => {
    const unbyted = new Unbyted({ bytes: true })

    expect(unbyted.toBinaryString(100)).toBe('100.00 B')
    expect(unbyted.toDecimalString(100)).toBe('100.00 B')
  })

  test('custom decimal places / floating points', () => {
    const unbyted = new Unbyted({ decimals: 1 })

    expect(unbyted.toBinaryString(100)).toBe('0.1 KiB')
    expect(unbyted.toDecimalString(100)).toBe('0.1 KB')
  })
})

describe('Custom measurement units', () => {
  test('valid custom binary units', () => {
    const unbyted = new Unbyted({
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

    expect(unbyted.toBinaryString(100)).toBe('0.10 Kibibytes')
  })

  test('valid custom decimal units', () => {
    const unbyted = new Unbyted({
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

    expect(unbyted.toDecimalString(100)).toBe('0.10 Kilobytes')
  })

  test('throws if 7 custom measurement units are not provided', () => {
    expect(
      () =>
        new Unbyted({
          // @ts-expect-error: tests error handling
          binaryUnits: ['Bytes', 'Kibibytes', 'Mebibytes'],
        })
    ).toThrow()

    expect(
      () =>
        new Unbyted({
          // @ts-expect-error: tests error handling
          decimalUnits: ['Bytes', 'Kilobytes', 'Megabytes'],
        })
    ).toThrow()
  })
})
