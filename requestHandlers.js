const exec = require('child_process').exec;

function start() {
    console.log('Request handler start was called');

    // function sleep(milliSeconds) {
    //     const startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }

    // sleep(1000);
    let content = 'empty';

    exec('ls -lah', (error, stdout, stderr) => {
        content = stdout;
    });
    return content;
}

function upload() {
    console.log('Request handler upload was called');
    return 'Hello Updload';
}


exports.start = start;
exports.upload = upload;