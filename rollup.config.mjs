import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

export default {
  input: 'src/index.js',
  output: {
    name: 'niphub',
    file: 'dist/niphub.es.js',
    format: 'es'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled'
    }),
    terser()
  ]
};
