var favicons = require("favicons").stream;
var log = require("fancy-log");
var gulp = require("gulp");

gulp.task("default", function () {
  return gulp.src("logo.png").pipe(favicons({
    appName: "Steun de brouwer",
    appShortName: "Steun de brouwer",
    appDescription: "Steun de brouwer",
    developerName: "disjfa",
    developerURL: "https://disjfa.github.io/",
    background: "#ffffff",
    theme_color: "#1c3144",
    path: "/steundebrouwer/icons/",
    url: "https://disjfa.github.io/steundebrouwer/",
    display: "standalone",
    orientation: "any",
    lang: "nl-NL",
    scope: "/steundebrouwer",
    start_url: "/steundebrouwer/?homescreen=1",
    version: 1.0,
    logging: false,
    html: "index.html",
    pipeHTML: true,
    replace: true
  }))
    .on("error", log)
    .pipe(gulp.dest("./icons"));
});
