import * as migration_20261106_190820_initial from './20261106_190820_initial';
import * as migration_20261107_090000_site_branding from './20261107_090000_site_branding';
import * as migration_20261119_200000_enquiries from './20261119_200000_enquiries';
import * as migration_20261120_000000_dpdp_sections from './20261120_000000_dpdp_sections';

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
  {
    up: migration_20261119_200000_enquiries.up,
    down: migration_20261119_200000_enquiries.down,
    name: '20261119_200000_enquiries'
  },
  {
    up: migration_20261120_000000_dpdp_sections.up,
    down: migration_20261120_000000_dpdp_sections.down,
    name: '20261120_000000_dpdp_sections'
  },
];
