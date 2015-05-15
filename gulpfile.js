var gulp        = require('gulp');
var debug       = require('gulp-debug');
var util        = require('gulp-util');
// var ftp         = require('vinyl-ftp'); // Not installed--but could be...
var harp        = require('harp');


gulp.task('commands', function () {
  util.log('This project has the following commands available:' +
           '\n- Run `gulp serve` to launch a local version of the site.' +
           '\n- Run `gulp compile` to build a version of the website for FTP upload.');
});

gulp.task('compile', function () {
  var compiledOutput = 'www';

  // Call `harp compile` as a pre-step for deployment
  // harp.compile(projectPath [,outputPath] [, callback])
  harp.compile(__dirname, compiledOutput, function (error) {
    if (error) util.log(error);
    else util.log(
      'Compiled the website into the \'' + compiledOutput + '\' directory.'
    );
  });
});

gulp.task('serve', function () {
  var browserSync = require('browser-sync').create();  // "post 2.0.0 syntax"
  var port = 9000;

  harp.server(__dirname, { port: port }, function () {
    browserSync.init({
      notify: false,
      proxy: 'localhost:' + port
    });
  });

  gulp.watch('public/**/*.scss', function () {
    browserSync.reload('main.css');
  });
  gulp.watch([
    'harp.json',
    'public/**/*.jade',
    'public/**/*.md',
    'public/**/*.js'
  ], function () {
    browserSync.reload();
  });
});

gulp.task('build', ['compile']);
gulp.task('default', ['commands']);
gulp.task('server', ['serve']);
