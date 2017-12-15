module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'mocha', 'chai'],
    files: ['tmp/compiled/**/*.js'],
    preprocessors: {
      'tmp/compiled/**/*.js': ['browserify'],
    },
    reporters: ['progress'],
    colors: true,
    logLevel: config.TRACE,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    concurrency: Infinity,
  })
}