#!/usr/bin/env node
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({type: 'cjs', dir: __dirname})
})()
