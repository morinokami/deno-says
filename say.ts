import { writeAll } from "@std/io/write-all";
import type { Writer } from "@std/io";
import stringWidth from "string-width";

const DENO_ASCII_ART = String.raw`
        \     _
         \  ( ･ヽ
               \ \
               |  ｀ヽ
               ⎩      ﾄ､
                u¯u︶u
`;

/**
 * Make Deno say something.
 *
 * @param input The message you want Deno to say
 * @param maxWidth The maximum width of a line before it is wrapped
 * @param writer A writer to which the message will be written
 *
 * @example
 * ```ts
 * import { say } from "jsr:@morinokami/deno-says/say";
 *
 * say("Hello, World!");
 * ```
 */
export async function say(
  input: string,
  maxWidth: number = 40,
  writer: Writer = Deno.stdout,
) {
  let result = "";

  // wrap text to fit within maxWidth
  const words = input.split(" ");
  const wrappedLines: string[] = [];
  let currentLine = "";
  for (const word of words) {
    const currentLineLength = stringWidth(currentLine.trim());
    const wordLength = stringWidth(word);
    if (currentLineLength + wordLength + 1 <= maxWidth) {
      currentLine += `${word} `;
    } else {
      wrappedLines.push(currentLine.trim());
      currentLine = `${word} `;
    }
  }
  wrappedLines.push(currentLine.trim());

  const actualWidth = Math.max(
    ...wrappedLines.map((line) => stringWidth(line)),
  );

  // top border
  result += ` ${"_".repeat(actualWidth + 2)}\n`;

  // input text
  for (const line of wrappedLines) {
    const padding = " ".repeat(actualWidth - stringWidth(line));
    result += `< ${line}${padding} >\n`;
  }

  // bottom border
  result += ` ${"-".repeat(actualWidth + 2)}`;

  result += DENO_ASCII_ART;

  await writeAll(writer, new TextEncoder().encode(result));
}
