const { mkdirSync, writeFileSync, existsSync } = require("fs");
const { join } = require("path");

function initQuest(destination:string) {
  const parts = ["part1", "part2", "part3"];

  try {
    if (!existsSync(destination)) {
      mkdirSync(destination, { recursive: true });
    }

    parts.forEach((part) => {
      const tsFile = join(destination, `${part}.ts`);
      const inputFile = join(destination, `${part}.input`);

      const boilerplateCode = `
import { readFileSync } from 'fs';

const input = readFileSync('${inputFile}', 'utf-8').trim();

`;

      writeFileSync(inputFile, "", "utf-8");
      console.log(`Created: ${inputFile}`);

      writeFileSync(tsFile, boilerplateCode.trimStart(), "utf-8");
      console.log(`Created: ${tsFile}`);
    });

    console.log(`Initialized quest files in ${destination}`);
  } catch (err) {
    console.error("Error initializing quest files:", err);
  }
}

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error("Usage: bun init-quest.ts <destination_directory>");
  process.exit(1);
}

const destination = args[0];
initQuest(destination);
