// Rebuild native modules for the current Electron version
const { rebuild } = require('@electron/rebuild');
const electronPkg = require('electron/package.json');

(async () => {
  try {
  await rebuild({ buildPath: process.cwd(), electronVersion: electronPkg.version });
    console.log('electron-rebuild: completed');
  } catch (err) {
    console.error('electron-rebuild: failed');
    console.error(err && err.stack ? err.stack : err);
    process.exit(1);
  }
})();
