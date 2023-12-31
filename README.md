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
@oclif/plugin-test-cjs-2/0.0.0 darwin-arm64 node-v18.7.0
$ cjs2 --help [COMMAND]
USAGE
  $ cjs2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cjs2 hello PERSON`](#cjs2-hello-person)
* [`cjs2 hello world`](#cjs2-hello-world)
* [`cjs2 help [COMMANDS]`](#cjs2-help-commands)
* [`cjs2 plugins`](#cjs2-plugins)
* [`cjs2 plugins:install PLUGIN...`](#cjs2-pluginsinstall-plugin)
* [`cjs2 plugins:inspect PLUGIN...`](#cjs2-pluginsinspect-plugin)
* [`cjs2 plugins:install PLUGIN...`](#cjs2-pluginsinstall-plugin-1)
* [`cjs2 plugins:link PLUGIN`](#cjs2-pluginslink-plugin)
* [`cjs2 plugins:uninstall PLUGIN...`](#cjs2-pluginsuninstall-plugin)
* [`cjs2 plugins:uninstall PLUGIN...`](#cjs2-pluginsuninstall-plugin-1)
* [`cjs2 plugins:uninstall PLUGIN...`](#cjs2-pluginsuninstall-plugin-2)
* [`cjs2 plugins update`](#cjs2-plugins-update)

## `cjs2 hello PERSON`

Say hello

```
USAGE
  $ cjs2 hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oclif/plugin-test-cjs-2/blob/v0.0.0/dist/commands/hello/index.ts)_

## `cjs2 hello world`

Say hello world

```
USAGE
  $ cjs2 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cjs2 hello world
  hello world! (./src/commands/hello/world.ts)
```

## `cjs2 help [COMMANDS]`

Display help for cjs2.

```
USAGE
  $ cjs2 help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cjs2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.14/src/commands/help.ts)_

## `cjs2 plugins`

List installed plugins.

```
USAGE
  $ cjs2 plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cjs2 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `cjs2 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cjs2 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cjs2 plugins add

EXAMPLES
  $ cjs2 plugins:install myplugin 

  $ cjs2 plugins:install https://github.com/someuser/someplugin

  $ cjs2 plugins:install someuser/someplugin
```

## `cjs2 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cjs2 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cjs2 plugins:inspect myplugin
```

## `cjs2 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cjs2 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cjs2 plugins add

EXAMPLES
  $ cjs2 plugins:install myplugin 

  $ cjs2 plugins:install https://github.com/someuser/someplugin

  $ cjs2 plugins:install someuser/someplugin
```

## `cjs2 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cjs2 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cjs2 plugins:link myplugin
```

## `cjs2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cjs2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cjs2 plugins unlink
  $ cjs2 plugins remove
```

## `cjs2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cjs2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cjs2 plugins unlink
  $ cjs2 plugins remove
```

## `cjs2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cjs2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cjs2 plugins unlink
  $ cjs2 plugins remove
```

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
<!-- commandsstop -->
