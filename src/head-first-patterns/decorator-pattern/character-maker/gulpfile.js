const gulp = require("gulp");
const ts = require("gulp-typescript");
const fs = require("fs");

const tsProject = ts.createProject({
    noImplicitAny: true,
    target: "ES5",
    module: "system",
    strict: true,
    esModuleInterop: true,
    outFile: "output.js",
});

function clean(cb) {
    console.log("cleaning");
    fs.readdir("./dist", function(err, files) {
        files.forEach(file => {
            fs.unlinkSync("./dist/" + file);
        });

        cb();
    });
}

function build(cb) {
    console.log("building");
    cb();
    return gulp
        .src("src/**/*.ts")
        .pipe(tsProject())
        .pipe(gulp.dest("dist"));
}

function restartServer(cb) {
    console.log("restarting server");
    if (cb !== undefined) {
        cb();
    }
}

function watch(glob, cb) {
    return gulp.watch(glob, function(cb) {
        cb();
    });
}

function watcher() {
    gulp.watch(["src/**/*.ts"], () => {
        clean(() => {
            build(() => {
                restartServer();
            });
        });
    });
}

exports.build = build;
exports.watch = watcher;
exports.default = gulp.series(clean, build);
