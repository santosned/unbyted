import dts from 'rollup-plugin-dts';
import { swc, minify } from 'rollup-plugin-swc3';

export default [
  {
    input: 'package/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.mjs',
        format: 'esm',
      },
    ],
    plugins: [
      swc({
        include: /\.[t]s?$/,
        jsc: {},
      }),
      minify({
        compress: true,
        toplevel: true,
        mangle: true,
      }),
    ],
  },
  {
    input: 'package/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default({})],
  },
];
