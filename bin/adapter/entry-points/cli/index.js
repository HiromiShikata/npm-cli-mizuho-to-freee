#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .argument('<targetDirectoryPath>', 'Path to the target directory where replacements are to be made')
    .argument('<beforeWord>', 'Word to be replaced throughout the target directory')
    .argument('<afterWord>', 'Word to replace the beforeWord with')
    .name('Replace all words')
    .description('CLI tool to convert Mizuho Bank data to freee format')
    .action(async (targetDirectoryPath, beforeWord, afterWord) => {
    console.log(JSON.stringify({ targetDirectoryPath, beforeWord, afterWord }));
});
if (process.argv) {
    program.parse(process.argv);
}
//# sourceMappingURL=index.js.map