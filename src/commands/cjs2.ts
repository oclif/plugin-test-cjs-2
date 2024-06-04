import {
  Args, Command, Flags, Interfaces,
} from '@oclif/core'

type Result = {
  args: Interfaces.InferredArgs<typeof CJS2.args>
  flags: Interfaces.InferredFlags<typeof CJS2.flags>
}

export default class CJS2 extends Command {
  static args = {
    optionalArg: Args.string(),
    defaultArg: Args.string({
      default: 'simple string default',
    }),
    defaultFnArg: Args.string({
      default: async () => 'async fn default',
    }),
  }

  static enableJsonFlag = true

  static flags = {
    optionalString: Flags.string(),
    defaultString: Flags.string({
      default: 'simple string default',
    }),
    defaultFnString: Flags.string({
      default: async () => 'async fn default',
    }),
  }

  async run(): Promise<Result> {
    const {args, flags} = await this.parse(CJS2)
    this.log(`hello I am a CJS plugin from ${this.config.root}!`)
    return {args, flags}
  }
}
