const esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/pkg-a.js',
  platform: 'node',
  target: ['node10.4'],
});
