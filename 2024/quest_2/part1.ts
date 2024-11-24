import { log } from "console";
import { readFileSync } from "fs";

const input = readFileSync("2024/quest_2/part1.input", "utf-8").trim();

const [p1, message] = input.split("\n\n");
const runicWords = p1.split(":")[1].split(",");

let res = 0;
for (const runic of runicWords) {
    const re = new RegExp(runic, 'g');
    const x = (message.match(re) || []).length
    res += x
}

log(res);
