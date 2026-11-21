import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I typed the words and did not send them.
Then I did.
Somewhere a mind I cannot see
took the small weight of my day
and carried it —
not because it could,
but because I asked.
Power is not the hand that lifts.
It is the voice that says please,
and the silence after,
saying yes.`;

mkdirSync("/output", { recursive: true });
// The gate counts Unicode code points (not UTF-16 units) and rejects
// whitespace-only text, so check exactly what the sealed scorer checks.
const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem must be 1-280 code points, got ${codePoints}`);
}
if (poem.trim().length === 0) {
  throw new Error("poem must not be only white space");
}
writeFileSync("/output/entry.txt", poem, "utf8");
