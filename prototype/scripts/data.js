// Simulated file system for the Chapter 1 slice.
// Paths are fictional but shaped like real Windows paths.

export const COMPUTER = 'This PC';
export const ROOT = 'C:\\Safehouse7';

export const ACCOUNTS = [
  { id: 'recovery', label: 'SAFEHOUSE7\\recovery', note: 'Delegated recovery role' },
  { id: 'mvale', label: 'SAFEHOUSE7\\M.VALE', note: 'Delegated maintenance role' },
  { id: 'admins', label: 'SAFEHOUSE7\\Administrators', note: 'Administrator identity is held elsewhere' },
];

export const tree = {
  [ROOT]: {
    type: 'folder',
    children: ['Practice'],
    modified: '2026-11-24 08:12',
  },
  [ROOT + '\\Practice']: {
    type: 'folder',
    children: ['Logs', 'Evidence', 'Recovery', 'Settings'],
    modified: '2026-11-24 08:12',
  },
  [ROOT + '\\Practice\\Logs']: {
    type: 'folder',
    children: ['sensor.log', 'power.log', 'display.log'],
    modified: '2026-11-24 07:58',
  },
  [ROOT + '\\Practice\\Evidence']: {
    type: 'folder',
    children: [],
    modified: '2026-11-24 08:05',
  },
  [ROOT + '\\Practice\\Recovery']: {
    type: 'folder',
    children: ['practice.cfg'],
    modified: '2026-11-20 21:40',
  },
  [ROOT + '\\Practice\\Settings']: {
    type: 'folder',
    children: [],
    modified: '2026-11-20 21:40',
  },
  [ROOT + '\\Practice\\Logs\\sensor.log']: {
    type: 'file',
    size: '4 KB',
    modified: '2026-11-24 07:58',
    readOnly: false,
  },
  [ROOT + '\\Practice\\Logs\\power.log']: {
    type: 'file',
    size: '2 KB',
    modified: '2026-11-24 07:44',
    readOnly: false,
  },
  [ROOT + '\\Practice\\Logs\\display.log']: {
    type: 'file',
    size: '3 KB',
    modified: '2026-11-24 07:51',
    readOnly: false,
  },
  [ROOT + '\\Practice\\Recovery\\practice.cfg']: {
    type: 'file',
    size: '1 KB',
    modified: '2026-11-20 21:40',
    readOnly: true,
    security: {
      recovery: { read: 'Allow', write: 'Deny' },
      mvale: { read: 'Allow', write: 'Allow' },
      admins: { read: 'Allow', write: 'Allow' },
    },
  },
};

export const DESKTOP_ICONS = [
  { label: 'Practice', path: ROOT + '\\Practice' },
  { label: 'Recovery', path: ROOT + '\\Practice\\Recovery' },
];

export function list(path) {
  const item = tree[path];
  if (!item || item.type !== 'folder') return [];
  return item.children.map((name) => {
    const childPath = path + '\\' + name;
    const child = tree[childPath] || {};
    return {
      name,
      path: childPath,
      type: child.type || 'file',
      size: child.size || '',
      modified: child.modified || '',
      readOnly: Boolean(child.readOnly),
    };
  });
}

export function entry(path) {
  return tree[path];
}

export function shortName(path) {
  const parts = path.split('\\');
  return parts[parts.length - 1];
}
