/**
 * @Name: rollup配置文件
 * @Description: rollup配置文件
 * @Author: 刘燕保
 * @Date: 2021-10-31 12:06:49
 **/

import rollupTypescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel';

export default {
  // input: 'src/index.ts',
  input: 'src/iii.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  plugins: [
    rollupTypescript(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ]
}
