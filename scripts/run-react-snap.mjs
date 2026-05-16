#!/usr/bin/env node
/**
 * Wrapper that runs react-snap with a modern Chromium.
 *
 * react-snap@1.23 bundles puppeteer@1.20 which ships Chromium ~v71 (Aug 2018).
 * That browser can't parse optional chaining (?.), nullish coalescing (??),
 * or any modern JS syntax used by our Vite-built bundles — so prerender
 * fails with "SyntaxError: Unexpected token '?'".
 *
 * Fix: install modern puppeteer (which downloads current Chromium) and
 * pass its executable path to react-snap via puppeteerExecutablePath.
 *
 * This script resolves the path at runtime so it works locally and in CI.
 */

import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import puppeteer from 'puppeteer';

const exePath = puppeteer.executablePath();
if (!exePath || !existsSync(exePath)) {
  console.error('❌ Modern Chromium not found at:', exePath);
  console.error('   Run `npx puppeteer browsers install chrome` to install it.');
  process.exit(1);
}
console.log('✅ Using Chromium at:', exePath);

const require = createRequire(import.meta.url);
const reactSnap = require('react-snap');

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const options = {
  ...pkg.reactSnap,
  puppeteerExecutablePath: exePath,
};

console.log('Running react-snap with options:', JSON.stringify({ ...options, include: `[${options.include?.length || 0} routes]` }, null, 2));

reactSnap.run(options)
  .then(() => {
    console.log('✅ react-snap completed');
  })
  .catch((err) => {
    console.error('❌ react-snap failed:', err);
    process.exit(1);
  });
