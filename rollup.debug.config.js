import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  input: ['src/lovelace-template-card.ts'],
  output: {
    dir: './dist',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    typescript(),
    json(),
    babel({
      exclude: 'node_modules/**',
    })],
};