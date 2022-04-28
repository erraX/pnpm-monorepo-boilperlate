// eslint-disable-next-line @typescript-eslint/no-var-requires
const esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/main.js',
  platform: 'node',
  target: ['node10.4'],
});
