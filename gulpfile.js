//Läser in gulp och gulp-paket
const {src, dest, watch, series, parallel} = require('gulp');
const concat = require('gulp-concat');
const uglify = require("gulp-uglify-es").default;
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create()



/* Sökvägar */
const files = {
    htmlPath: "src/**/*.html",
    jsPath: "src/**/*.js",
    cssPath: "src/**/*.css"
}

//Lägga över HTML-filer från src till pub
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'))
    .pipe(browserSync.stream())
    
}

// Sammanslå js-filer, minifiera-filer
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('pub/js'))
    .pipe(browserSync.stream())
}

// Sammanslå css-filer, minifiera filer
function cssTask() {
    return src(files.cssPath)
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(dest('pub/css'))
    .pipe(browserSync.stream());
    
        
}

// Lyssnar på ändringar och när filer sparas
function watchTask() {
    browserSync.init({
        server: {
            baseDir: 'pub/'
        }
    });

     watch([files.htmlPath, files.jsPath, files.cssPath],
        parallel(copyHTML, jsTask, cssTask))

        .on('change', browserSync.reload);
  
}


exports.default = series(

    parallel(copyHTML, jsTask, cssTask),
    watchTask 
   
);

