## Gulp build process

Gulp build process to prepare the website for deployment.

### Tech
* [gulp](http://gulpjs.com/) - Automate and enhance your workflow.
* [gulp-concat](https://github.com/contra/gulp-concat) - Concatenates files
* [gulp-sass](https://github.com/dlmanning/gulp-sass) - Gulp plugin for sass.
* [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) - Source map support for Gulp.js.
* [gulp-rename](https://github.com/hparra/gulp-rename) - Rename files.
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify files with UglifyJS.
* [gulp-image](https://github.com/1000ch/gulp-image) - Optimize PNG, JPG, GIF, SVG images with gulp task.
* [gulp-eslint](https://github.com/adametry/gulp-eslint) - A gulp plugin for processing files with ESLint.
* [del](https://github.com/sindresorhus/del) - Delete files and folders.

### Installation

```
$ git clone https://github.com/Liad91//treehouse_project-8.git
$ cd treehouse_project-8
$ npm install 
```

### Tasks
```
// Concat & uglify all files in js folder and creates a map file (only if files pass lint test)
$ gulp scripts

// Compile sass to minify css file and creates a map file
$ gulp styles

// Optimize all images
$ gulp images

// Remove dist directory
$ gulp clean

// Move index.html & icons folder to dist folder
$gulp mv

// Run clean task and after scripts, styles, images and mv tasks
$gulp build

// Run build task
$gulp
```

### License

MIT

***Free Software, Hell Yeah!***
