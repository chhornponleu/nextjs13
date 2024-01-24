
require('child_process').exec('git rev-parse HEAD', function (err, stdout) {
    console.log('Last commit hash on this branch is:', stdout);
    console.log((stdout));
});