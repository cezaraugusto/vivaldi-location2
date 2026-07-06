import {expect, test, describe} from 'vitest'

import vivaldiLocation, {getInstallGuidance} from '../src/index'

describe('vivaldi-location2 module', () => {
  it('returns string or null', () => {
    const res = vivaldiLocation()

    expect(typeof res === 'string' || res === null).toBe(true)
  })

  it('getInstallGuidance renders caller-provided install steps in order', () => {
    const msg = getInstallGuidance({
      steps: [
        {
          summary: 'Install Vivaldi for Testing (recommended)',
          command: 'npx extension install vivaldi'
        },
        {
          summary: 'Install Vivaldi',
          command: 'npx extension install vivaldi-stable'
        }
      ]
    })

    expect(msg).toMatch(
      new RegExp(
        '1\\) Install Vivaldi for Testing \\(recommended\\)\\n' +
          ' {3}npx extension install vivaldi'
      )
    )
    expect(msg).toMatch(
      /2\) Install Vivaldi\n {3}npx extension install vivaldi-stable/
    )
    expect(msg).not.toMatch(/Install Vivaldi from the official site/)
    expect(msg).toMatch(/We couldn't find a Vivaldi browser/)
  })

  it('getInstallGuidance with empty steps keeps the default hint', () => {
    expect(getInstallGuidance({steps: []})).toBe(getInstallGuidance())
  })
})
