import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default {
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
    typescript({ compilerOptions: { declaration: false } }),
    terser({
      ecma: 5,
      module: true,
      toplevel: true,
      keep_classnames: true,
      keep_fnames: true,
      compress: { pure_getters: true },
      format: { quote_style: 'original' },
    }),
  ],
}
