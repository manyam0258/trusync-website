import * as migration_20261106_190820_initial from './20261106_190820_initial';

export const migrations = [
  {
    up: migration_20261106_190820_initial.up,
    down: migration_20261106_190820_initial.down,
    name: '20261106_190820_initial'
  },
];
