import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('cjs2', () => {
  it('runs cjs2', async () => {
    const {stdout} = await runCommand('cjs2')
    expect(stdout).to.contain('hello I am a CJS plugin')
  })
})
