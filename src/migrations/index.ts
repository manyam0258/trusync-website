import * as migration_20261106_190820_initial from './20261106_190820_initial';
import * as migration_20261107_090000_site_branding from './20261107_090000_site_branding';

export const migrations = [
  {
    up: migration_20261106_190820_initial.up,
    down: migration_20261106_190820_initial.down,
    name: '20261106_190820_initial'
  },
  {
    up: migration_20261107_090000_site_branding.up,
    down: migration_20261107_090000_site_branding.down,
    name: '20261107_090000_site_branding'
  },
];
