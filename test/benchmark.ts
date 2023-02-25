import Unbyted from '../package/index';
import { suite, add, cycle, complete, save } from 'benny';

suite(
  'Unbyted',

  add('Unbyted.toBinary()', () => {
    Unbyted.toBinary(255492);
  }),

  add('Unbyted.toDecimal()', () => {
    Unbyted.toDecimal(255492);
  }),

  cycle(),
  complete(),
  save({ file: 'benchmark', format: 'chart.html' })
);
