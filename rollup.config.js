import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'package/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins: [
      typescript({ compilerOptions: { declaration: false } }),
      terser({
        ecma: 5,
        module: true,
        toplevel: true,
        compress: { pure_getters: true },
      }),
    ],
  },
  {
    input: 'package/index.ts',
    output: {
      file: 'dist/index.mjs',
      format: 'es',
    },
    plugins: [
      typescript({ compilerOptions: { declaration: true }, exclude: ['test/**/*'] }),
      terser({
        ecma: 5,
        module: true,
        toplevel: true,
        compress: { pure_getters: true },
      }),
    ],
  },
]
