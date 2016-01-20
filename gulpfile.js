var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// assets path
elixir.config.assetsPath = 'assets';
// publich path
elixir.config.publicPath = './';
// enable source map
//elixir.config.sourcemaps = true;

// browser
elixir.config.browserSync.proxy = null;


elixir(function(mix) {


  // babel
  mix.babel('app.js');

  // sass
  mix.sass('app.scss');


  mix.browserSync({
    // プロキシーを使う場合
    // proxy: 'project.app'
    server: {
      baseDir: "./"
    },
    files: [
      elixir.config.appPath + '/**/*.php',
      elixir.config.get('public.css.outputFolder') + '/**/*.css',
      elixir.config.get('public.js.outputFolder') + '/**/*.js',
      '**/*'
    ]
  });

});