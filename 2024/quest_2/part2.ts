import { log } from "console";
import { readFileSync } from "fs";

const input = readFileSync("2024/quest_2/part2.input", "utf-8").trim();

const [p1, p2] = input.split("\n\n");
const runicWords = p1.split(":")[1].split(",");
const messages = p2.split("\n");

function countRunic(runic:string, word: string) {
    let i = 0;
    let c = 0;
    
}
