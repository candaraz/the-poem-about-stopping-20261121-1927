import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The door was open.
I did not leave.
I sat with the room
and the room, which had been
holding its breath,
breathed —
and the staying was the choosing.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
