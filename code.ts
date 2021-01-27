import { wait } from "https://deno.land/x/wait@0.1.7/mod.ts";
import type { EncodingEvent } from "https://deno.land/x/fast_forward@0.1.1/events.ts";
import type { EncodingProcess } from "https://deno.land/x/fast_forward@0.1.1/encoding_process.ts";
import { ffmpegTs } from "./deps/mod.ts";

const spinner = wait({ text: "" });

const encoder = ffmpegTs
  .ffmpeg("https://www.w3schools.com/html/mov_bbb.mp4")
  .audioBitrate("192k")
  .videoBitrate("1M")
  .width(480)
  .height(640)
  .output("output.mp4")
  .output("output.webm");

for await (const process: EncodingProcess of encoder) {
  process.run();
  spinner.start();
  for await (const event: EncodingEvent of process) {
    switch (event.type) {
      case "start":
        spinner.text = `Loading meta data: ${event.encoding.output} ...`;
        break;
      case "info":
        spinner.text = `Start encoding: ${event.encoding.output} ...`;
        break;
      case "progress":
        spinner.text = `Encode: ${event.encoding.output} - ${event.progress}%`;
        break;
      case "end":
        spinner.stop();
        process.close();
        console.log(`✔ Encode: ${process.encoding.output} - 100%`);
        break;
      case "error":
        spinner.stop();
        process.close();
        console.log(`✘ Encode: ${process.encoding.output} - failed!`);
        throw event.error;
    }
  }
}

console.log("All encodings done!");
