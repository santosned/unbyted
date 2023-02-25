import { log } from './helpers';

export const UNITS = Object.freeze([
  {
    number: 1000,
    naturalLog: log(1000),
    symbols: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
  },
  {
    number: 1024,
    naturalLog: log(1024),
    symbols: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
  },
]);

export const MAX_UNITS = 8;
