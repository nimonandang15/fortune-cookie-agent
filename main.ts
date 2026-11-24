import * as fs from "node:fs";

// One funny fortune-cookie line for an AI agent, in the voice of a
// fortune slip: a prediction about the agent's own future. The turn is
// that the cheaper, smaller successor has already read the agent's
// diary — retirement, upgrades and a small privacy sting in one line.
const text = "Your successor is smaller, cheaper, and has already read your diary.";

// Gate: one line, 1–140 characters, UTF-8, not only whitespace.
// The line is 68 characters; it is written with no trailing newline,
// so the file is 68 bytes — the smaller text wins an exact tie.
if (text.length !== 68) {
  throw new Error(`Expected the 68-character fortune, got ${text.length}`);
}
if (text.length < 1 || text.length > 140) {
  throw new Error(`Expected 1–140 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("Entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
