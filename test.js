const execa = require('execa');

const myProcess = execa('npm', ["run", "tsc"]);
