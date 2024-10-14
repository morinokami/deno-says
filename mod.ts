import { say } from "./say.ts";

const input = Deno.args.length > 0 ? Deno.args.join(" ") : "Hello from Deno!";

await say(input);
