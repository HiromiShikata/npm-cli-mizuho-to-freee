import { execSync } from 'child_process';

describe('commander program', () => {
  it('should output help contents', () => {
    const output = execSync(
      'npx ts-node ./src/adapter/entry-points/cli/index.ts -h',
    ).toString();

    expect(output.trim())
      .toEqual(`Usage: Replace all words [options] <targetDirectoryPath> <beforeWord> <afterWord>

CLI tool to convert Mizuho Bank data to freee format

Arguments:
  targetDirectoryPath  Path to the target directory where replacements are to be
                       made
  beforeWord           Word to be replaced throughout the target directory
  afterWord            Word to replace the beforeWord with

Options:
  -h, --help           display help for command`);
  });
  it('should output arguments as JSON', () => {
    const output = execSync(
      'npx ts-node ./src/adapter/entry-points/cli/index.ts /path/to/dir mizuho freee',
    ).toString();

    expect(output.trim()).toEqual(
      JSON.stringify({
        targetDirectoryPath: '/path/to/dir',
        beforeWord: 'mizuho',
        afterWord: 'freee',
      }),
    );
  });
});
