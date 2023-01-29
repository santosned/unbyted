import { describe, expect, test } from '@jest/globals'
import unbyted from '../package/index'

const yotta = 2e25
const zetta = 2e22
const exa = 2e20
const peta = 2e16
const tera = 2e12
const giga = 2e10
const mega = 2e8
const kilo = 2e4

describe('new Unbyted instance', () => {
  test('turns bytes to binary string', () => {
    const methods = unbyted()

    expect(methods.toBinaryString(kilo)).toBe('19.53 KiB')
    expect(methods.toBinaryString(mega)).toBe('190.73 MiB')
    expect(methods.toBinaryString(giga)).toBe('18.63 GiB')
    expect(methods.toBinaryString(tera)).toBe('1.82 TiB')
    expect(methods.toBinaryString(peta)).toBe('17.76 PiB')
    expect(methods.toBinaryString(exa)).toBe('173.47 EiB')
    expect(methods.toBinaryString(zetta)).toBe('16.94 ZiB')
    expect(methods.toBinaryString(yotta)).toBe('16.54 YiB')
  })

  test('turns bytes to decimal string', () => {
    const methods = unbyted()

    expect(methods.toDecimalString(kilo)).toBe('20.00 KB')
    expect(methods.toDecimalString(mega)).toBe('200.00 MB')
    expect(methods.toDecimalString(giga)).toBe('20.00 GB')
    expect(methods.toDecimalString(tera)).toBe('2.00 TB')
    expect(methods.toDecimalString(peta)).toBe('20.00 PB')
    expect(methods.toDecimalString(exa)).toBe('200.00 EB')
    expect(methods.toDecimalString(zetta)).toBe('20.00 ZB')
    expect(methods.toDecimalString(yotta)).toBe('20.00 YB')
  })

  test('trowns when given invalid bytes', () => {
    const methods = unbyted()

    // @ts-expect-error: tests error handling
    expect(() => methods.toBinaryString({})).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => methods.toBinaryString(null)).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => methods.toBinaryString('100')).toThrow()
    expect(() => methods.toBinaryString(Infinity)).toThrow()

    // @ts-expect-error: tests error handling
    expect(() => methods.toDecimalString({})).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => methods.toDecimalString(null)).toThrow()
    // @ts-expect-error: tests error handling
    expect(() => methods.toDecimalString('100')).toThrow()
    expect(() => methods.toDecimalString(Infinity)).toThrow()
  })
})

describe('Unbyted Options', () => {
  test('trim', () => {
    const methods = unbyted({ trim: true })

    expect(methods.toBinaryString(0)).toBe('0 KiB')
    expect(methods.toDecimalString(0)).toBe('0 KB')
  })

  test('unitDisplay - short', () => {
    const methods = unbyted({ unitDisplay: 'short' })

    expect(methods.toBinaryString(0)).toBe('0.00 KiB')
    expect(methods.toDecimalString(0)).toBe('0.00 KB')
  })

  test('unitDisplay - narrow', () => {
    const methods = unbyted({ unitDisplay: 'narrow' })

    expect(methods.toBinaryString(0)).toBe('0.00KiB')
    expect(methods.toDecimalString(0)).toBe('0.00KB')
  })

  test('unitDisplay - narrow', () => {
    const methods = unbyted({ unitDisplay: 'long' })

    expect(methods.toBinaryString(0)).toBe('0.00 Kibibyte')
    expect(methods.toDecimalString(0)).toBe('0.00 Kilobyte')
  })

  test('symbols', () => {
    const methods = unbyted({ symbols: false })

    expect(methods.toBinaryString(0)).toBe('0.00')
    expect(methods.toDecimalString(0)).toBe('0.00')
  })

  test('includeBytes', () => {
    const methods = unbyted({ includeBytes: true })

    expect(methods.toDecimalString(200)).toBe('200.00 B')
  })

  test('digits', () => {
    const methods = unbyted({ digits: 0 })

    expect(methods.toDecimalString(kilo)).toBe('20 KB')
  })

  test('locales', () => {
    const methods = unbyted({ locales: 'pt-BR' })

    expect(methods.toBinaryString(kilo)).toBe('19,53 KiB')
    expect(methods.toDecimalString(kilo)).toBe('20,00 KB')
  })

  test('precision', () => {
    const methods = unbyted({ precision: 3 })

    expect(methods.toBinaryString(mega)).toBe('191.00 MiB')
    expect(methods.toDecimalString(mega)).toBe('200.00 MB')
  })
})
