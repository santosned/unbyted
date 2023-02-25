import { UnbytedOptions } from './types';
import { log } from './helpers';
import { MAX_UNITS, UNITS } from './constants';

/** The `unbyted` module provides a simple API to convert bytes into readable measurement units. */
class Unbyted {
  private readonly space: boolean;
  private readonly trim: boolean;
  private readonly digits: number;
  static toBinary: (input?: number) => string;
  static toDecimal: (input?: number) => string;

  constructor(opt?: UnbytedOptions) {
    this.space = opt?.space ?? true;
    this.trim = opt?.trim ?? false;
    this.digits = opt?.digits ?? 2;
  }

  public toBinary(input = 0) {
    return this.compute(input, 1);
  }

  public toDecimal(input = 0) {
    return this.compute(input, 0);
  }

  private compute(input: number, index: number): string {
    if (typeof input !== 'number' || isNaN(input) || !isFinite(input)) {
      throw new TypeError('Expected a number, got ' + typeof input);
    }

    const unit = UNITS[index];

    const dividend = input > 0 ? input : 0;

    const inputNaturalLog = log(dividend);

    const quotient = inputNaturalLog / unit.naturalLog;
    const symbolIndex = quotient > MAX_UNITS ? MAX_UNITS : ~~quotient;
    const unitValue = dividend / unit.number ** symbolIndex;

    let value = unitValue.toFixed(this.digits);

    if (this.trim) value = parseFloat(value).toString();

    return value + (this.space ? ' ' : '') + unit.symbols[symbolIndex];
  }
}

const unbyted = new Unbyted();

Unbyted.toBinary = (input = 0) => unbyted.toBinary(input);
Unbyted.toDecimal = (input = 0) => unbyted.toDecimal(input);

export { Unbyted };
