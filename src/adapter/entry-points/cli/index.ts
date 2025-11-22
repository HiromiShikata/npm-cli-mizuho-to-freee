#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .argument(
    '<targetDirectoryPath>',
    'Path to the target directory where replacements are to be made',
  )
  .argument(
    '<beforeWord>',
    'Word to be replaced throughout the target directory',
  )
  .argument('<afterWord>', 'Word to replace the beforeWord with')
  .name('Replace all words')
  .description('CLI tool to convert Mizuho Bank data to freee format')
  .action(
    async (
      targetDirectoryPath: string,
      beforeWord: string,
      afterWord: string,
    ) => {
      console.log(
        JSON.stringify({ targetDirectoryPath, beforeWord, afterWord }),
      );
    },
  );
if (process.argv) {
  program.parse(process.argv);
}
