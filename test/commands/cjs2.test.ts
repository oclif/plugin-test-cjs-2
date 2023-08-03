import {expect, test} from '@oclif/test'

describe('hello', () => {
  test
  .stdout()
  .command(['cjs2'])
  .it('runs cjs2 cmd', ctx => {
    expect(ctx.stdout).to.contain('hello I am a CJS plugin')
  })
})
