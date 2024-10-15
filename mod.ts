import { parseArgs } from "node:util";

import { say } from "./say.ts";

const { values, positionals } = parseArgs({
  args: Deno.args,
  options: { width: { type: "string", short: "w", default: "40" } },
  allowPositionals: true,
});

if (!values.width || isNaN(parseInt(values.width))) {
  throw new Error("width must be a number");
}
const maxWidth = parseInt(values.width);

const input = positionals.length > 0
  ? positionals.join(" ")
  : "Hello from Deno!";

await say(input, maxWidth);
