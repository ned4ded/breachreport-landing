import gulp from 'gulp';
import fs from 'fs';
import path from 'path';
import config from '../gulpfile.config';
import engine from 'gulp-nunjucks-render';
import minify from 'gulp-htmlmin';

export function html() {
  const envHooks = [
    env => env.addFilter('typeOf', function(el) {
      const type = typeof el;

      const getType = (t) => {
        if (t == 'object') {

          return el instanceof Array ? 'array' : 'object';
        }

        return t;
      }

      return getType(type);
    }),

    env => env.addFilter('capitalizeFirst', function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }),
  ]

  const data = fs.readdirSync( config.paths.datasets ).reduce( (acc, filename) => {
    return { ...acc, [ path.basename( filename, '.json') ] : require('../' + config.paths.datasets + '/' + filename) };
  }, {});

  data.get = function(name) {
    return this[name];
  }

  return gulp.src(config.paths.pages)
    .pipe(engine({
      data: {
        datasets: data,
      },
      path: ['src/pages/templates'],
      manageEnv: function(env) {
        return envHooks.forEach(fn => fn(env));
      },
    }))
    .pipe(minify({ collapseWhitespace: true }))
    .pipe(gulp.dest(config.server.dest))
};
