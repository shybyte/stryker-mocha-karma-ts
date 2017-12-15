const {execSync} = require('child_process');

function listModifiedFiles(regexp) {
  const modifiedFiles = execSync('git ls-files -m', {encoding: "UTF8"})
    .split('\n')
    .filter(fileName => !!fileName);
  return modifiedFiles.filter(fileName => regexp.test(fileName));
}

module.exports = function (config) {
  config.set({
    files: ['!**/*.*', 'src/**/*.ts', 'test/**/*.ts'],
    mutate: ['!**/*.*'].concat(listModifiedFiles(/src.*\.ts/)),
    testRunner: "karma",
    mutator: "typescript",
    transpilers: ["typescript"],
    reporter: ["html", "baseline", "clear-text", "progress"],
    coverageAnalysis: "off",
    karmaConfigFile: "karma.conf.js",
    tsconfigFile: "tsconfig.json",
  });
};
