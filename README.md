# (WIP) gif.ts

![CI](https://github.com/Eyoatam/gif.ts/workflows/ci/badge.svg)
![](https://img.shields.io/github/v/release/Eyoatam/gif.ts?logo=github)
![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/deno-^1.4.0-informational?logo=deno")

> I made this framework to practice using deno and creating deno modules
> but you can use it to convert video files to gifs

Turn videos into gifs.

## Installation

```bash
deno install --allow-read --allow-write --allow-run -f -n gif https://deno.land/x/deno_gif@0.2.6/cli.ts
```

This module Requires `ffmpeg`:

```
brew install ffmpeg
```

## Example

```ts
import { gif } from "https://deno.land/x/deno_gif@0.2.6/mod.ts";

const opts = {
	width: 480,
	height: 380,
};

gif("https://www.w3schools.com/html/mov_bbb.mp4", "./out.gif", opts);
```

or using the cli

```bash
gif -w 480 -t 350 https://www.w3schools.com/html/mov_bbb.mp4 output.mp4
```

## Options

- `width` type number
- `height` type number

# License

[MIT](https://github.com/Eyoatam/gif.ts/blob/master/LICENSE)
