module.exports = function (config) {
  config.set({
    files: ['!**/*.*', 'src/**/*.ts', 'test/**/*.ts'],
    mutate: ['!**/*.*', 'src/**/*.ts'],
    testRunner: "karma",
    mutator: "typescript",
    transpilers: ["typescript"],
    reporter: ["html", "baseline", "clear-text", "progress"],
    coverageAnalysis: "off",
    karmaConfigFile: "karma.conf.js",
    tsconfigFile: "tsconfig.json",
  });
};
