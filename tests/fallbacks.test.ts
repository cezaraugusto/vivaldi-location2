import { describe, expect, test, afterEach, vi } from 'vitest';

describe('vivaldi-location2 fallbacks', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  test('macOS: strict null, fallback finds Snapshot', async () => {
    const scanOsxPath = (await import('../src/scan-osx-path')).default as any;
    const strict = scanOsxPath(false, {
      fs: { existsSync: (p: string) => p.includes('Vivaldi Snapshot.app') },
      userhome: () => '/Users/test/Applications',
    });
    const fallback = scanOsxPath(true, {
      fs: { existsSync: (p: string) => p.includes('Vivaldi Snapshot.app') },
      userhome: () => '/Users/test/Applications',
    });
    expect(strict).toBeNull();
    expect(
      typeof fallback === 'string' && /Vivaldi Snapshot\.app/.test(fallback),
    ).toBe(true);
  });

  test('Windows: strict null, fallback finds Snapshot', async () => {
    const scanWindowsPath = (await import('../src/scan-windows-path'))
      .default as any;
    const strict = scanWindowsPath(false, {
      fs: { existsSync: (p: string) => /Vivaldi Snapshot/.test(p) },
      env: {
        LOCALAPPDATA: 'C\\Local',
        PROGRAMFILES: undefined,
        'PROGRAMFILES(X86)': undefined,
      } as any,
    });
    const fallback = scanWindowsPath(true, {
      fs: { existsSync: (p: string) => /Vivaldi Snapshot/.test(p) },
      env: {
        LOCALAPPDATA: 'C\\Local',
        PROGRAMFILES: undefined,
        'PROGRAMFILES(X86)': undefined,
      } as any,
    });
    expect(strict).toBeNull();
    expect(
      typeof fallback === 'string' && /Vivaldi Snapshot/.test(fallback),
    ).toBe(true);
  });

  test('Linux/other: strict only stable; fallback tries snapshot', async () => {
    const scanUnknown = (await import('../src/scan-unknown-platform-path'))
      .default as any;
    const calls: string[] = [];
    const strict = scanUnknown(false, {
      which: {
        sync: (cmd: string) => {
          calls.push(cmd);
          throw new Error('nf');
        },
      },
    });
    const result = scanUnknown(true, {
      which: {
        sync: (cmd: string) => {
          calls.push(cmd);
          if (cmd === 'vivaldi-snapshot') return '/usr/bin/vivaldi-snapshot';
          throw new Error('nf');
        },
      },
    });
    expect(strict).toBeNull();
    expect(result === null || result === '/usr/bin/vivaldi-snapshot').toBe(
      true,
    );
    expect(calls[0]).toBe('vivaldi');
  });
});
