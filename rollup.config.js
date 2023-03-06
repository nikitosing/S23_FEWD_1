import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'src/main.ts',
  output: { file: 'dist/bundle.js' },
  plugins: [
    nodeResolve({ browser: true }),
    typescript(),
    terser()
  ]
}