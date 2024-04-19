// Read file
const fs = require('fs');
const content =
    fs.readFileSync('.github/workflows/example/javascript.js', 'utf8');

process.stdout.write(content.substring(0, 200) + '...\n');

// Test console.out
console.log('log: Hello World 1');
console.info('info: Hello World 2');
console.warn('warn: Hello World 3');
console.error('error: Hello World 4');

// Run shell command
const {execSync} = require('child_process');
execSync('echo "shell: Hello World 5"');
const content2 =
    execSync('cat .github/workflows/example/javascript.js').toString();
console.log(content2 === content ? 'Same content' : 'Different content');

// Get input params;
const env1 = process.env.Env1;
const env2 = process.env.Env2;
console.log('input1: ' + env1);
console.log('input2: ' + env2);

const arg1 = process.argv[2];
const arg2 = process.argv[3];
console.log('args: ' + process.argv);

// Set output params
console.log('::set-output name=output1::' + env1 + arg1);
fs.writeFileSync(process.env.GITHUB_OUTPUT, 'output2=' + env2 + arg2);

// console log:
