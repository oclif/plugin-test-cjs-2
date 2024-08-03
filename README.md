oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-test-cjs-2
$ cjs2 COMMAND
running command...
$ cjs2 (--version)
@oclif/plugin-test-cjs-2/0.7.19 linux-x64 node-v18.20.4
$ cjs2 --help [COMMAND]
USAGE
  $ cjs2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cjs2 cjs2 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`](#cjs2-cjs2-optionalarg-defaultarg-defaultfnarg)
* [`cjs2 help [COMMAND]`](#cjs2-help-command)
* [`cjs2 plugins`](#cjs2-plugins)
* [`cjs2 plugins:inspect PLUGIN...`](#cjs2-pluginsinspect-plugin)
* [`cjs2 plugins install PLUGIN`](#cjs2-plugins-install-plugin)
* [`cjs2 plugins link PATH`](#cjs2-plugins-link-path)
* [`cjs2 plugins reset`](#cjs2-plugins-reset)
* [`cjs2 plugins uninstall [PLUGIN]`](#cjs2-plugins-uninstall-plugin)
* [`cjs2 plugins update`](#cjs2-plugins-update)

## `cjs2 cjs2 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`

```
USAGE
  $ cjs2 cjs2 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG] [--json] [--optionalString <value>]
    [--defaultString <value>] [--defaultFnString <value>]

FLAGS
  --defaultFnString=<value>  [default: async fn default]
  --defaultString=<value>    [default: simple string default]
  --optionalString=<value>

GLOBAL FLAGS
  --json  Format output as json.
```

_See code: [src/commands/cjs2.ts](https://github.com/oclif/plugin-test-cjs-2/blob/0.7.19/src/commands/cjs2.ts)_

## `cjs2 help [COMMAND]`

Display help for cjs2.

```
USAGE
  $ cjs2 help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cjs2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.7/src/commands/help.ts)_

## `cjs2 plugins`

List installed plugins.

```
USAGE
  $ cjs2 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cjs2 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.0/src/commands/plugins/index.ts)_

## `cjs2 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cjs2 plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cjs2 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.0/src/commands/plugins/inspect.ts)_

## `cjs2 plugins install PLUGIN`

Installs a plugin into cjs2.

```
USAGE
  $ cjs2 plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into cjs2.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CJS2_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CJS2_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ cjs2 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ cjs2 plugins install myplugin

  Install a plugin from a github url.

    $ cjs2 plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ cjs2 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.0/src/commands/plugins/install.ts)_

## `cjs2 plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ cjs2 plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cjs2 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.0/src/commands/plugins/link.ts)_

## `cjs2 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ cjs2 plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.0/src/commands/plugins/reset.ts)_

## `cjs2 plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ cjs2 plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cjs2 plugins unlink
  $ cjs2 plugins remove

EXAMPLES
  $ cjs2 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.0/src/commands/plugins/uninstall.ts)_

## `cjs2 plugins update`

Update installed plugins.

```
USAGE
  $ cjs2 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
