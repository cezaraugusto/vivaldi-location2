#!/usr/bin/env node
'use strict';

const api = require('./dist/index.cjs');
const locateVivaldi = api.default || api;
const getVivaldiVersion = api.getVivaldiVersion;
const getInstallGuidance = api.getInstallGuidance;

const argv = process.argv.slice(2);
const allowFallback = argv.includes('--fallback') || argv.includes('-f');
const printBrowserVersion =
  argv.includes('--vivaldi-version') || argv.includes('--browser-version');
const allowExec = argv.includes('--allow-exec');

try {
  const vivaldiPath =
    (typeof locateVivaldi === 'function' && locateVivaldi(allowFallback)) ||
    (typeof locateVivaldi === 'function' && locateVivaldi(true)) ||
    null;

  if (!vivaldiPath) {
    const guidance =
      (typeof getInstallGuidance === 'function' && getInstallGuidance()) ||
      'Vivaldi not found.';
    console.error(guidance);
    process.exit(1);
  }

  if (printBrowserVersion && typeof getVivaldiVersion === 'function') {
    const v = getVivaldiVersion(vivaldiPath, { allowExec });
    if (!v) {
      console.log('');
      process.exit(2);
    }
    console.log(String(v));
    process.exit(0);
  }

  console.log(String(vivaldiPath));
} catch (e) {
  console.error(String(e?.message ? e.message : e));
  process.exit(1);
}

