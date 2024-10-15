# @morinokami/deno-says

A Deno version of the [`cowsay`](https://en.wikipedia.org/wiki/Cowsay) command.

## Usage

You can run deno-says using the following command:

```sh
deno run jsr:@morinokami/deno-says 'Hello, World!'
```

This will output the following:

```
 _______________
< Hello, World! >
 ---------------
        \     _
         \  ( ･ヽ
               \ \
               |  ｀ヽ
               ⎩      ﾄ､
                u¯u︶u
```

A maximum width can be specified using the `--width` flag:

```sh
deno run jsr:@morinokami/deno-says --width 5 'Hello from Deno!'
```

This will output the following:

```
 _______
< Hello >
< from  >
< Deno! >
 -------
        \     _
         \  ( ･ヽ
               \ \
               |  ｀ヽ
               ⎩      ﾄ､
                u¯u︶u
```

Addtionally, you can use the `say` function in your own code:

```ts
import { say } from "jsr:@morinokami/deno-says/say";

say("Hello, World!");
```
