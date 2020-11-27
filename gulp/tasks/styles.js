var gulp = require('gulp'),
postCss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
    //Using pipe, dest and src to create a new styles folder in temp folder
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postCss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
  });