const yargs = require('yargs');

yargs.version('1.0.0');

yargs.command({
    command: 'list',
    describe: 'List all todo.',
    handler(){
        console.log('listing...');
        
    }
});

const argv = yargs.argv