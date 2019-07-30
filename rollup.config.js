import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import vuePlugin from 'rollup-plugin-vue'

export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'bundle',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    vuePlugin()
  ]
}
