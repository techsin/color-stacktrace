const colors = require('colors');
const path = require('path');

exports.init = function (obj) {
    obj.prepareStackTrace = (err, arr) => {
        let pwd = path.resolve(process.env.PWD || process.cwd());
        let lines = err.stack.split('\n');
        lines = lines.map((x, i) => {
            if (i == 0) {
                return x;
            } else if (!x.includes('node_modules') && x.includes(pwd)) {
                return x;
            } else {
                return colors.grey(x);
            }
        });
        lines = lines.join('\n');
        err.stack = lines;
    };
}