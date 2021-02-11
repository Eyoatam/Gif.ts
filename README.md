# (WIP) Gif.ts

![CI](https://github.com/Eyoatam/gif.ts/workflows/ci/badge.svg)
![](https://img.shields.io/github/v/release/Eyoatam/gif.ts?logo=github)
![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/deno-^1.4.0-informational?logo=deno")

> convert your videos to gifs

## Installation

```bash
deno install --allow-read --allow-write --allow-run -f -n gif https://deno.land/x/deno_gif@0.3.5/cli.ts
```

This module Requires `ffmpeg`:

```
brew install ffmpeg
```

## Example

> Example of converting video to gif with options

```ts
import { gif } from "https://deno.land/x/deno_gif@0.3.5/mod.ts";

const options = {
  width: 480,
  height: 380,
};

gif(
  "https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4",
  "output",
  options
);
```

> and without options

```ts
import { gif } from "https://deno.land/x/deno_gif@0.3.5/mod.ts";

gif(
  "https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4",
  "output",
  options
);
```

> or using the cli

```bash
gif -i https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4 -o output
```

> Example of converting video to mp3

```ts
import { mp3 } from "https://deno.land/x/deno_gif@0.3.5/mod.ts";

mp3(
  "https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4",
  "output"
);
```

> or using the cli

```bash
gif --mp3 -i https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4 -o output
```

> Example of converting video to mp4 with options

```ts
import { mp4 } from "https://deno.land/x/deno_gif@0.3.5/mod.ts";

const options = {
  width: 480,
  height: 350,
};

mp4(
  "https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4",
  "output",
  options
);
```

> and with out options

```ts
import { mp4 } from "https://deno.land/x/deno_gif@0.3.5/mod.ts";

mp4(
  "https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4",
  "output"
);
```

> or using the cli

```bash
gif --mp4 -i https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4 -o output
```

> Example of converting video to avi with options

```ts
import { avi } from "https://deno.land/x/deno_gif@0.3.5/mod.ts";

const options = {
  width: 480,
  height: 350,
};

avi(
  "https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4",
  "output",
  options
);
```

> and with out options

```ts
import { avi } from "https://deno.land/x/deno_gif@0.3.5/mod.ts";

avi(
  "https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4",
  "output"
);
```

> or using the cli

```bash
gif --avi -i https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4 -o output
```

> Example of converting video to webm with options

```ts
import { webm } from "https://deno.land/x/deno_gif@0.3.5/mod.ts";

const options = {
  width: 480,
  height: 350,
};

webm(
  "https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4",
  "output",
  options
);
```

> and with out options

```ts
import { webm } from "https://deno.land/x/deno_gif@0.3.5/mod.ts";

webm(
  "https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4",
  "output"
);
```

> or using the cli

```bash
gif --webm -i https://github.com/Eyoatam/Gif.ts/tree/master/example/testdata/video.mp4 -o output
```

## Options

- `width` type number
- `height` type number

## Show Your Support

Give a 🌟 if you like this project!

# License

[MIT](https://github.com/Eyoatam/gif.ts/blob/master/LICENSE)
